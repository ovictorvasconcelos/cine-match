export interface UserProps {
    _id: string
    email: string
    password: string
    username: string
    firstname: string
    lastename: string
    profileImage?: string
    createdAt?: Date
}

export class User {
    private props: UserProps;
    
    public getUserId(): string {
        return this.props._id
    }

    constructor (props: UserProps) {
        this.props = props
    }
}