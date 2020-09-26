/* eslint-disable camelcase */
import { useMemo } from 'react';
import * as Icon from 'react-icons/fa';
import axios from 'axios';

import * as S from '../styles';

interface IResponse {
  avatar_url: string;
  html_url: string;
}

interface HomeProps {
  avatarUrl: string;
  htmlUrl: string;
}

const Home: React.FC<HomeProps> = ({ avatarUrl, htmlUrl }) => {
  const socialNetworks = useMemo(() => {
    return {
      github: htmlUrl || process.env.NEXT_PUBLIC_GITHUB_URL,
      twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      spotify: process.env.NEXT_PUBLIC_SPOTIFY_URL,
    };
  }, [htmlUrl]);

  return (
    <S.Container>
      <S.MainContainer>
        <button
          onClick={() => window.open(socialNetworks.github, 'blank')}
          type="button"
        >
          <S.ImageLabel>
            <Icon.FaGithub />
          </S.ImageLabel>
          <img src={avatarUrl} alt="github_avatar" />
        </button>

        <S.Informations>
          <strong>Douglas Simon Camargo</strong>

          <span role="img" aria-label="computer">
            Software Developer 🛠 💻
          </span>
          <a href="mailto:me@dscamargo.com">me@dscamargo.com</a>
        </S.Informations>

        <S.SocialNetworksContainer>
          <a href={socialNetworks.github} target="_blank" rel="noreferrer">
            <Icon.FaGithub size={40} />
          </a>
          <a href={socialNetworks.linkedin} target="_blank" rel="noreferrer">
            <Icon.FaLinkedin size={40} />
          </a>
          <a href={socialNetworks.twitter} target="_blank" rel="noreferrer">
            <Icon.FaTwitter size={40} />
          </a>
          <a href={socialNetworks.instagram} target="_blank" rel="noreferrer">
            <Icon.FaInstagram size={40} />
          </a>
          <a href={socialNetworks.spotify} target="_blank" rel="noreferrer">
            <Icon.FaSpotify size={40} />
          </a>
        </S.SocialNetworksContainer>
      </S.MainContainer>
    </S.Container>
  );
};

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const { data } = await axios.get<IResponse>(
    'https://api.github.com/users/dscamargo',
  );

  return {
    props: {
      avatarUrl: data.avatar_url || '',
      htmlUrl: data.html_url || '',
    },
  };
}

export default Home;
