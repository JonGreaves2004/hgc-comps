export const allCompetitionsQuery = `*[_type == "competition"] | order(title asc){_id, title, slug, type}`;

export const rulesTopicsQuery = `*[_type == "ruleTopic"] | order(title asc){_id, title, slug, summary}`;

export const singleBySlugQuery = `*[_type in ["competition","ruleTopic","notice","faq"] && slug.current == $slug][0]{
  _id, _type, title, slug, body, format, type, eligibility, schedule, handicap_rules,
  entry_booking, withdrawals_no_shows, tees_times, prizes_sweeps, effective_date, version
}`;
