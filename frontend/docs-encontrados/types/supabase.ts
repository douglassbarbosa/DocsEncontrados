// types/supabase.ts

export type MatchView = {
  document_name: string;
  document_type: string;
  match_score: number;
}

export type LostDocument = {
  id: string;
  document_number: string;
  document_name: string;
  document_type: string;
  document_issuer: string;
  lost_at: string;
  lost_location: string;
  owner_id: string;
  status_code: number;
}

export type FoundDocument = {
  id: string;
  document_number: string;
  document_name: string;
  document_type: string;
  document_issuer: string;
  issued_at: string;
  found_at: string;
  found_location: string;
  status_code: number;
}

export type SupportPoint = {
  id: string;
  point_type: string;
  name: string;
  address: string;
  postal_code: string;
  email: string;
  phones: string;
  manager_user_id: string;
}

export type User = {
  id: string;
  full_name: string;
  email: string;
  birth_date: string;
  nationality: string;
  cpf?: string;
  mother_name?: string;
  passport_number?: string;
  passport_issued_at?: string;
  passport_valid_until?: string;
  country?: string;
  city?: string;
  state?: string;
  phone_number: string;
  user_type: string;
  created_at: string;
  updated_at: string;
}

export type UserSession = {
  user: User | null;
  access_token: string | null;
  refresh_token: string | null;
  error: Error | null;
}

export type AuthResponse = {
  user: User | null;
  session: UserSession | null;
  error: Error | null;
}

export type AuthError = {
  message: string;
  status: number;
}

export type AuthErrorResponse = {
  error: AuthError | null;
}

export type AuthSuccessResponse = {
  user: User | null;
  session: UserSession | null;
} | null

export type AuthResponseType = AuthErrorResponse | AuthSuccessResponse
export type AuthErrorType = AuthError | null
export type AuthSuccessType = AuthSuccessResponse | null
export type AuthErrorMessage = string | null
export type AuthSuccessMessage = string | null
export type AuthErrorStatus = number | null
export type AuthSuccessStatus = number | null
export type AuthErrorCode = string | null
export type AuthSuccessCode = string | null
export type AuthErrorDescription = string | null
export type AuthSuccessDescription = string | null
export type AuthErrorHint = string | null
export type AuthSuccessHint = string | null

export type FoundDocumentsSummaryView = {
  document_name: string;
  document_type: string;
  document_number: string;
  found_location: string;
  found_at: string;
  status_code: number;
}

export type SupportPointsOverviewView = {
  name: string;
  manager_name: string;
  documents_received: number;
}

export type Database = {
  views: {
    found_documents_summary_view: FoundDocumentsSummaryView;
    possible_matches_view: MatchView;
    support_points_overview_view: SupportPointsOverviewView;
  };
  public: {
    Tables: {
      lost_documents: LostDocument;
      found_documents: FoundDocument;
      support_points: SupportPoint;
      users: User;
    };
  };
}
