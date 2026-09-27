-- deploy/sql/00_saiem_db.sql — run ONCE as the cluster superuser (role `sdv` on the droplet):
--   PW=$(openssl rand -hex 24); sudo -u sdv psql -d postgres -v pw="$PW" -f /opt/saiem-blog/deploy/sql/00_saiem_db.sql
-- A fresh role for this app (spec §3): never sdv_loader / sdv_read. The password is hex → URL-safe.
create role saiem_app login password :'pw';
create database saiem owner saiem_app;
revoke all on database saiem from public;
