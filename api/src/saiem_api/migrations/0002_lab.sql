-- api/src/saiem_api/migrations/0002_lab.sql — P5 metering + run cache (spec §6)
create table if not exists app.quotas (
  user_id    bigint  not null references app.users(id),
  entry_slug text    not null,
  day        date    not null,
  used       integer not null default 0 check (used >= 0),
  "limit"    integer not null,
  primary key (user_id, entry_slug, day)
);

create table if not exists app.spend (
  month      date   primary key,              -- first day of the month (UTC)
  units_used bigint not null default 0 check (units_used >= 0),
  units_cap  bigint not null
);

create table if not exists app.lab_runs (
  id          uuid primary key default gen_random_uuid(),
  entry_slug  text not null,
  user_id     bigint references app.users(id),
  params_hash text not null,
  status      text not null check (status in ('running', 'ok', 'error', 'timeout')),
  started_at  timestamptz not null default now(),
  finished_at timestamptz,
  cost_units  integer not null default 0,
  result      jsonb,
  error       text
);
create index if not exists lab_runs_cache on app.lab_runs (entry_slug, params_hash) where status = 'ok';
