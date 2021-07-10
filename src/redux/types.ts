export interface AchievementsInfos {
  description: string;
  id: number;
  image: string;
  kind: string;
  name: string;
  nbr_of_success: number;
  tier: string;
  users_url: string;
  visible: boolean;
}

export interface ProjectsDetailsInfos {
  id: number;
  name: string;
  parent_id: number;
  slug: string;
}

export interface ProjectsInfos {
  created_at: string;
  current_team_id: number;
  cursus_ids: Array<number>;
  final_mark: number;
  id: number;
  marked: boolean;
  marked_at: string;
  occurrence: number;
  project: ProjectsDetailsInfos;
  retriable_at: string;
  status: string;
  updated_at: string;
  'validated?': boolean;
}

export interface UserInfos {
  id?: number;
  email?: string;
  login?: string;
  first_name?: string;
  last_name?: string;
  usual_first_name?: string;
  url?: string;
  phone?: string;
  displayname?: string;
  usual_full_name?: string;
  image_url?: string;
  staff?: boolean;
  correction_point?: number;
  pool_month?: string;
  pool_year?: string;
  location?: string;
  wallet?: number;
  anonymize_date?: string;
  created_at?: string;
  updated_at?: string;
  groups?: Array<any>;
  cursus_users?: Array<CursusInfos>;
  projects_users?: Array<ProjectsInfos>;
  languages_users?: Array<any>;
  titles?: Array<any>;
  titles_users?: Array<any>;
  partnerships?: Array<any>;
  patroned?: Array<any>;
  patroning?: Array<any>;
  expertises_users?: Array<any>;
  roles?: Array<any>;
  campus?: Array<any>;
  campus_users?: Array<any>;
  achievements: Array<AchievementsInfos>;
}

export interface UsersInfos {
  created_at?: string;
  id?: number;
  login?: string;
  updated_at?: string;
  url?: string;
}

export interface SkillsInfos {
  id: string;
  level: number;
  name: string;
}

export interface CursusInfos {
  begin_at: string;
  blackholed_at: string;
  created_at: string;
  cursus: {
    created_at: string;
    id: number;
    name: string;
    slug: string;
  };
  cursus_id: number;
  end_at: string;
  grade: string;
  has_coalition: boolean;
  id: number;
  level: number;
  skills: Array<SkillsInfos>;
  updated_at: string;
  user: UsersInfos;
}

export type StatusProps = 'idle' | 'loading' | 'success' | 'failed';
