tailwind.config = {
    theme: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      },
      extend: {
        colors: {
          darkdesaturatedblue: 'hsl(238, 29%, 16%)',
          Softred: 'hsl(14, 88%, 65%)',
          Softviolet: 'hsl(273, 75%, 66%)',
          Softblue: 'hsl(240, 73%, 65%)',
          Verydarkgrayishblue: 'hsl(237, 12%, 33%)',
          Darkgrayishblue: 'hsl(240, 6%, 50%)',
          Lightgrayishblue: 'hsl(240, 5%, 91%)'
        },
        fontFamily: {
          'KumbhSans': 'Kumbh Sans, sans-serif'
        },
        backgroundImage: {
          'pattern-desktop' : "url('./images/bg-pattern-desktop.svg')"
        }
      }
    }
  }