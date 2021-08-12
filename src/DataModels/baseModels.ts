export interface main {
    address: Address,
    bio: string,
    contactmessage: string,
    description: string,
    email: string,
    image: string,
    name: string
    occupation: string
    phone: string,
    resumedownload: string,
    social: Social[],
    website: string

}

export interface ResponseModel{
    main:main,
    work:workItem[],
    otherWork:otherWork[]
}

export interface otherWork{
    title:string,
    imageUrl:string
}
export interface workItem {
    name: string,
    description: string,
    header: string,
    imageSrc: string,
    order: number,
    projects: Project[]
}

interface Project {
    title: string,
    videoUrl: string
}

interface Social {
    className: string,
    name: string,
    url: string
}

interface Address {
    city: string,
    state: string,
    street: string,
    zip: string
}

export interface VimeoDataModel{
   typ: string,
   version: string,
  provider_name: string,
  provider_url: string,
  html: string,
  width: number,
  height: number,
  domain_status_code: number,
  video_id: number,
  uri: string
}