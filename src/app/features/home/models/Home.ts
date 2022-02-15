import { Image } from "src/app/shared/models/Shared";

export interface Header {
    img: Image;
    name: string;
    created: string;
    onButtonClick: () => void;
}

export interface Hero {
    img: Image;
    description: string;
}

export interface Main {
    title: string;
    img: Image;
    text: string;
}

export interface Gallery {
    title: string;
    imageGallery: Image[]
}
export interface Footer {
    img: Image;
    name: string;
    created: string;
}



