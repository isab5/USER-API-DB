PGDMP      3    
            }            rede_social    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16409    rede_social    DATABASE     q   CREATE DATABASE rede_social WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE rede_social;
                     postgres    false            �            1259    16420    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    description character varying(200),
    photo text
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16419    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220                        0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16411    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    photo text
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16410    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            ]           2604    16423    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            \           2604    16414    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    16420    posts 
   TABLE DATA           @   COPY public.posts (id, user_id, description, photo) FROM stdin;
    public               postgres    false    220   m       �          0    16411    users 
   TABLE DATA           7   COPY public.users (id, name, email, photo) FROM stdin;
    public               postgres    false    218   �                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 4, true);
          public               postgres    false    219                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 50, true);
          public               postgres    false    217            c           2606    16425    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            _           2606    16418    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            a           2606    16416    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            d           2606    16426    posts posts_user_id_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public               postgres    false    218    220    4705            �   N   x�3�4�tUp��Wp	���2�4�	89:{������9�9�������� $j�i��� ����t������ ��%      �   �  x�m�Mr#7���)x�d�ٻ��3S��]��l�jJ��M*�ne�UV9DV�U&7�I�@J�����"�`HOϖ�Aݘ��L]b�9�Ӱuz�zvNw����Xo�ɬיO�#�X�kȃ�c2�!H|*Ӎqvg�#�.��I��D��	�=+b���?���x�X=���)&Э�i��r�q
/�oi�Y7�O��;Vw�צ���n�
/i�F�G���@�
�
���;��UX?3�d�Q������#�K�02�I;P�=�������m�"����@�|P|2�U�����Ub&�*�c�7�iVO�~K��ĺ;p���U�}P�W�7u�JHs�B;�k�����S�I�
�~0>ڟ{s���� �Zr�m������NX�/�����U+n`Ž�VPG��)0Gcq�eq���$*�C��Q�ߥ� �Q7*��ےC�{�5��*�#���=�SǃI^�.�c��d,�q���*�Z�uj�'�s�:f�]�B?�{t�,�m �Y�3����������ix)]%(�(�鲱�K)q�K�������qt
�l�S�a5�'�`���u��!͝��n�n0�:��'z�O�o����Bdu�e\�6r�7ǃ�-�M���2w v(�c�����n;�$Bօ
�7n-��c�5z'Ph����*����fBO�)�hFt��-���	G���V]���ƬF�Z�`ڻ7q/�'�:��aR���A9�2�������`+:��Vx?�YD�7М���c�-��gzǒQ0FЕy�ՀA��1C�c�V&v�R�II@�X+���bB�=~q�=f'�U&�
�k�m��n���l����b�_���)�HW�
����#Yni�����v�/i��j���	i�T��AZ�~t6G�=�:�T�U����Z�      