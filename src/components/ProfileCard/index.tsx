import { Buildings, Users, ArrowSquareOut, GithubLogo } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  Description,
  InfoList,
  ProfileCardContainer,
  ProfileCardContent,
  Title,
} from "./styles";

export function ProfileCard() {
  const { user } = useContext(UserContext);

  return (
    <ProfileCardContainer>
      <img src={user?.avatar_url} alt="" />

      <ProfileCardContent>
        <Title>
          <h2>{user?.name}</h2>
          <a href={user?.html_url} target="_blank">
            <span>GITHUB</span>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </Title>

        <Description>{user?.bio}</Description>

        <InfoList>
          <li>
            <GithubLogo size={22} weight="fill" color="#3A536B" />
            <span>{user?.login}</span>
          </li>

          <li>
            <Buildings size={22} color="#3A536B" weight="fill" />
            <span>{user?.company}</span>
          </li>

          <li>
            <Users size={22} color="#3A536B" weight="fill" />
            <span>{user?.followers} seguidores</span>
          </li>
        </InfoList>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}
