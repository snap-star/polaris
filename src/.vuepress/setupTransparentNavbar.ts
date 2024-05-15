const setupTransparentNavbar: (options?: {
    /**
     * @default 'blog-homepage'
     */
    type?: "homepage" | "blog-homepage" | "all";
  
    /**
     * Transparent threshold
     *
     * @default 50
     */
    threshold?: number;
  
    /**
     * Text color in lightmode
     *
     * @default '#fff'
     */
    light?: string;
  
    /**
     * Text color in darkmode
     *
     * @default '#bbb'
     */
    dark?: string;
  }) => void;
  