-- api/src/saiem_api/migrations/0001_app.sql — P4 tables (spec §6). P5 adds 0002 (quotas, spend, lab_runs).
create table if not exists app.users (
  id         bigserial primary key,
  github_id  bigint not null unique,
  login      text   not null,
  first_seen timestamptz not null default now(),
  last_seen  timestamptz not null default now()
);

create table if not exists app.views (
  slug  text   primary key,
  count bigint not null default 0 check (count >= 0)
);

-- One row per (slug, visitor, day): the dedup key for POST /v1/views/{slug}. `visitor` is an
-- HMAC of the client IP computed by Next; the API never sees an address. Purged after 2 days.
create table if not exists app.view_events (
  slug    text not null,
  visitor text not null,
  day     date not null default current_date,
  primary key (slug, visitor, day)
);

create table if not exists app.projects (
  id        text    primary key,
  title     text    not null,
  summary   text    not null default '',
  url       text,
  repo      text,
  tags      text[]  not null default '{}',
  sort      integer not null default 0,
  published boolean not null default true
);
