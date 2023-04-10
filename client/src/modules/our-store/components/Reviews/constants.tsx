export interface ReviewImageProps {
    id:           string;
    author:       Author;
    width:        number;
    height:       number;
    url:          string;
    download_url: string;
}

export enum Author {
    PaulJarvis = "Paul Jarvis",
}
