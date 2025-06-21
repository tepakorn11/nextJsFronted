export interface IProfile {
  id: string
  name: string
  username: string
  email: string
  bio: string
  avatar: string
  location: string
  socials: ISocial
  joined_at: string
}

export interface ISocial {
  github: string
  twitter: string
  linkedin: string
}


export interface IRoadMap {
  year: number;
  title: string;
  description: string;
  icon: string;

}