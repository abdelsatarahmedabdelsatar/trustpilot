
export type StoryItemType = {
    title:string,
    subTitle:string,
    src:string,
    
}

export type CategoryItemType = {
    _id: number,
      title: string,
      route: string,
      icon: string,
      companies:string[]
}

export type ReviewItemType = {

    title: string,
    reviewers: number,
    time: string,
    logo: string,
    rateSrc: string
}

export type CompanyItemType = {

    title:string,
    logo:string,
    rateSrc:string,
    reviewers:string,
    score:string
}