function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `var(${cssVariable})` : `rgb(var(${cssVariable}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      textColor: {
        color_text_00: withOpacity("--color-text-00"),
        color_text_10: withOpacity("--color-text-10"),
        color_text_11: withOpacity("--color-text-11"),
        color_text_12: withOpacity("--color-text-12"),
        color_text_13: withOpacity("--color-text-13"),
        color_text_14: withOpacity("--color-text-14"),
        color_text_15: withOpacity("--color-text-15"),
        color_text_16: withOpacity("--color-text-16"),
        color_text_17: withOpacity("--color-text-17"),
        color_text_18: withOpacity("--color-text-18"),
        color_text_19: withOpacity("--color-text-19"),
        color_text_20: withOpacity("--color-text-20"),
        color_text_21: withOpacity("--color-text-21"),
        color_text_22: withOpacity("--color-text-22"),
        color_text_23: withOpacity("--color-text-23"),
        color_text_24: withOpacity("--color-text-24"),
        color_text_25: withOpacity("--color-text-25"),
        color_text_26: withOpacity("--color-text-26"),
        color_text_27: withOpacity("--color-text-27"),
        color_text_28: withOpacity("--color-text-28"),
        color_text_29: withOpacity("--color-text-29"),
        color_text_30: withOpacity("--color-text-30"),

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme_100: withOpacity("--theme-text-100"),
        theme_200: withOpacity("--theme-text-200"),
        theme_300: withOpacity("--theme-text-300"),
        theme_400: withOpacity("--theme-text-400"),
        theme_500: withOpacity("--theme-text-500"),
        theme_600: withOpacity("--theme-text-600"),
        theme_700: withOpacity("--theme-text-700"),
        theme_800: withOpacity("--theme-text-800"),
        theme_900: withOpacity("--theme-text-900"),
       
      },
      borderColor: {
        color_border_0: withOpacity("--color-border-0"),
        color_border_10: withOpacity("--color-border-10"),
        color_border_20: withOpacity("--color-border-20"),
        color_border_30: withOpacity("--color-border-30"),
        color_border_40: withOpacity("--color-border-40"),
        color_border_50: withOpacity("--color-border-50"),
        color_border_60: withOpacity("--color-border-60"),
        color_border_70: withOpacity("--color-border-70"),
        color_border_80: withOpacity("--color-border-80"),
        color_border_90: withOpacity("--color-border-90"),
        color_border_100: withOpacity("--color-border-100"),



        theme_border_100: withOpacity(" --theme-border-100"),
        theme_border_200: withOpacity(" --theme-border-200"),
        theme_border_300: withOpacity(" --theme-border-300"),
        theme_border_400: withOpacity(" --theme-border-400"),
        theme_border_500: withOpacity(" --theme-border-500"),
        theme_border_600: withOpacity(" --theme-border-600"),
        theme_border_700: withOpacity(" --theme-border-700"),
        theme_border_800: withOpacity(" --theme-border-800"),
        theme_border_900: withOpacity(" --theme-border-900"),
      },
      backgroundColor: {
        background_body: withOpacity("--background-body"),
        background_body_dark: withOpacity("--background-bodyDark"),


      
        color_bg_00: withOpacity("--color-text-00"),
        color_bg_10: withOpacity("--color-text-10"),
        color_bg_11: withOpacity("--color-text-11"),
        color_bg_12: withOpacity("--color-text-12"),
        color_bg_13: withOpacity("--color-text-13"),
        color_bg_14: withOpacity("--color-text-14"),
        color_bg_15: withOpacity("--color-text-15"),
        color_bg_16: withOpacity("--color-text-16"),
        color_bg_17: withOpacity("--color-text-17"),
        color_bg_18: withOpacity("--color-text-18"),
        color_bg_19: withOpacity("--color-text-19"),
        color_bg_20: withOpacity("--color-text-20"),
        color_bg_21: withOpacity("--color-text-21"),
        color_bg_22: withOpacity("--color-text-22"),
        color_bg_23: withOpacity("--color-text-23"),
        color_bg_24: withOpacity("--color-text-24"),
        color_bg_25: withOpacity("--color-text-25"),
        color_bg_26: withOpacity("--color-text-26"),
        color_bg_27: withOpacity("--color-text-27"),
        color_bg_28: withOpacity("--color-text-28"),
        color_bg_29: withOpacity("--color-text-29"),
        color_bg_30: withOpacity("--color-text-30"),

  // COVER --------------------------------------------------
        // --------------------------------------------------------

        color_cover_100: withOpacity("--color-cover-100"),
        color_cover_200: withOpacity("--color-cover-200"),
        color_cover_300: withOpacity("--color-cover-300"),
        color_cover_400: withOpacity("--color-cover-400"),
        color_cover_500: withOpacity("--color-cover-500"),
        color_cover_600: withOpacity("--color-cover-600"),
        color_cover_700: withOpacity("--color-cover-700"),
        color_cover_800: withOpacity("--color-cover-800"),
        color_cover_900: withOpacity("--color-cover-900"),

         // BLACK --------------------------------------------------

        color_coverblack_100: withOpacity("--color-coverblack-100"),
        color_coverblack_200: withOpacity("--color-coverblack-200"),
        color_coverblack_300: withOpacity("--color-coverblack-300"),
        color_coverblack_400: withOpacity("--color-coverblack-400"),
        color_coverblack_500: withOpacity("--color-coverblack-500"),
        color_coverblack_600: withOpacity("--color-coverblack-600"),
        color_coverblack_700: withOpacity("--color-coverblack-700"),
        color_coverblack_800: withOpacity("--color-coverblack-800"),
        color_coverblack_900: withOpacity("--color-coverblack-900"),
       

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme_00: withOpacity("--theme-bg-00"),
        theme_100: withOpacity("--theme-bg-100"),
        theme_200: withOpacity("--theme-bg-200"),
        theme_300: withOpacity("--theme-bg-300"),
        theme_400: withOpacity("--theme-bg-400"),
        theme_500: withOpacity("--theme-bg-500"),
        theme_600: withOpacity("--theme-bg-600"),
        theme_700: withOpacity("--theme-bg-700"),
        theme_800: withOpacity("--theme-bg-800"),
        theme_900: withOpacity("--theme-bg-900"),
      }
    },
    // fontFamily:{
    //   AcuminPro : 'Acumin Pro',
    //   AcuminProItalic : 'Acumin Pro Italic',
    //   AcuminProBold : 'Acumin Pro Bold',
    //   AcuminProBoldItalic : 'Acumin Pro Bold Italic',
    //   //-------------------------------------------------
    //   AdobeCleanBlack : 'Adobe Clean Black',
    //   AdobeCleanLight : 'Adobe Clean Light',
    //   AdobeCleanUXBold : 'Adobe Clean UX Bold',
    //   //-------------------------------------------------
    //   SourceSansPro : 'Source Sans Pro',
    //   SourceSansProBold : 'Source Sans Pro Bold',
    
    // }
    
  },
  darkMode: "class",
  plugins: [],
}