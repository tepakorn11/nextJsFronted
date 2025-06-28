export interface IProfile {
  id: string
  name?: string
  first_name?: string
  last_name?: string
  role?: string
  avatar?: string
  email?: string
  location?: string
  status?: string
  created_at: string
  username?: string
  bio?: string
  joined_at: string
  socials?: ISocial
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