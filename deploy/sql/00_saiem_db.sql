-- deploy/sql/00_saiem_db.sql — run as the cluster superuser (role `sdv` on the droplet); rerunnable:
-- run: sudo -u sdv psql -d postgres -v ON_ERROR_STOP=1 -v pw="$PW" -f 00_saiem_db.sql   (see runbook §2a for the stdin form)
-- -v ON_ERROR_STOP=1 aborts the script on its first error instead of continuing past it. If it
-- does error, the password may already be in the Postgres log (log_min_error_statement logs the
-- failing statement, `pw` included) — rotate it: pick a new $PW and re-run this whole step.
-- A fresh role for this app (spec §3): never sdv_loader / sdv_read. The password is hex → URL-safe.
select format('create role saiem_app login password %L', :'pw') where not exists (select 1 from pg_roles where rolname = 'saiem_app') \gexec
alter role saiem_app with login password :'pw';
select 'create database saiem owner saiem_app' where not exists (select 1 from pg_database where datname = 'saiem') \gexec
revoke all on database saiem from public;
