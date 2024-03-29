import { Server,Member, profile } from "@prisma/client"

export type ServerWithMembersWithProfile = Server & {
    members: (Member & {profile: profile})
}