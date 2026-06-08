// Vercel serverless function: receives the qualifier form submission and
// creates/updates the lead as a contact in GoHighLevel, tagged "application submitted".
// The GHL API token is read from a server-side env var so it is never exposed to the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error('Missing GHL_API_TOKEN or GHL_LOCATION_ID env var');
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const {
    full_name = '',
    first_name = '',
    last_name = '',
    email = '',
    phone = '',
    monthly_revenue = '',
    running_meta_ads = '',
    ready_to_invest = '',
  } = body;

  const GHL = 'https://services.leadconnectorhq.com';
  const headers = {
    Authorization: `Bearer ${token}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
  };

  try {
    // Upsert (create or update by email/phone) so repeat submissions don't error out.
    const upsertRes = await fetch(`${GHL}/contacts/upsert`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId,
        firstName: first_name,
        lastName: last_name,
        name: full_name,
        email,
        phone,
        source: 'VSL Qualifier Form',
        tags: ['application submitted'],
      }),
    });

    const data = await upsertRes.json();

    if (!upsertRes.ok) {
      console.error('GHL upsert failed', upsertRes.status, data);
      res.status(502).json({ error: 'GHL error', detail: data });
      return;
    }

    const contactId = data?.contact?.id || data?.id;

    // Best-effort: store the qualifier answers as a note on the contact.
    if (contactId) {
      try {
        await fetch(`${GHL}/contacts/${contactId}/notes`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            body:
              `VSL Qualifier answers:\n` +
              `• Current monthly revenue: ${monthly_revenue}\n` +
              `• Running Meta Ads: ${running_meta_ads}\n` +
              `• Ready to invest: ${ready_to_invest}`,
          }),
        });
      } catch (noteErr) {
        console.error('Note creation failed (non-fatal)', noteErr);
      }
    }

    res.status(200).json({ ok: true, contactId });
  } catch (err) {
    console.error('submit handler error', err);
    res.status(500).json({ error: 'Internal error' });
  }
}
