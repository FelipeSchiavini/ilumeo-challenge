SET check_function_bodies = false;
CREATE TABLE public.clocktime (
    id integer NOT NULL,
    start timestamp with time zone,
    "end" timestamp with time zone,
    user_id text NOT NULL
);
CREATE SEQUENCE public.clocktime_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.clocktime_id_seq OWNED BY public.clocktime.id;
CREATE TABLE public."user" (
    id text DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.clocktime ALTER COLUMN id SET DEFAULT nextval('public.clocktime_id_seq'::regclass);
ALTER TABLE ONLY public.clocktime
    ADD CONSTRAINT clocktime_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.clocktime
    ADD CONSTRAINT clocktime_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
