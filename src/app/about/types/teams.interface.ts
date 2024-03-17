export interface ITeams{
    name: {
        title: string,
        first: string,
        last: string,
    },
    email: string,
    phone: string,
    login:{
        uuid:string
    },
    picture:{
        large:string
    }
}
