export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}

declare module "*.png" {
    import {StaticImageData} from "next/image";
    const content: StaticImageData;
    export default content;
}

declare module "*.jpg" {
    const content: StaticImageData;
    export default content;
}

declare module "*.jpeg" {
    const content: StaticImageData;
    export default content;
}

declare module "*.gif" {
    const content: StaticImageData;
    export default content;
}

declare module "*.webp" {
    const content: StaticImageData;
    export default content;
}

declare module "*.avif" {
    const content: StaticImageData;
    export default content;
}

declare module "*.ico" {
    const content: StaticImageData;
    export default content;
}

declare module "*.bmp" {
    const content: StaticImageData;
    export default content;
}
