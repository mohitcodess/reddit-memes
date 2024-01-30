declare module 'react-photoswipe-2' {
    import React from 'react';
  
    export interface PhotoSwipeProps {
      isOpen: boolean;
      items: PhotoSwipeItem[];
      options?: PhotoSwipeOptions;
      onClose: () => void;
    }
  
    export interface PhotoSwipeItem {
      src: string;
      w: number;
      h: number;
      title?: string;
    }
    interface ApiResponse {
      kind: string;
      data: {
        approved_at_utc: null | number;
        subreddit: string;
        selftext: string;
        author_fullname: string;
        saved: boolean;
        mod_reason_title: null | string;
        gilded: number;
        clicked: boolean;
        title: string;
        url:string
        thumbnail: string;
        
        preview: {
          images: {
            source: {
              url: string;
              width: number;
              height: number;
            };
            
          }[];
          
        };
        
      };
    }
    
  
    export interface PhotoSwipeOptions {
      index?: number;
      loop?: boolean;
      escKey?: boolean;
      closeOnScroll?: boolean;
      pinchToClose?: boolean;
      closeOnVerticalDrag?: boolean;
      history?: boolean;
      focus?: boolean;
      clickToCloseNonZoomable?: boolean;
      shareEl?: boolean;
      fullscreenEl?: boolean;
      zoomEl?: boolean;
      counterEl?: boolean;
      arrowEl?: boolean;
      preloaderEl?: boolean;
      getThumbBoundsFn?: (index: number) => { x: number; y: number; w: number };
    }
  
    export class PhotoSwipe extends React.Component<PhotoSwipeProps> {}
  }
  