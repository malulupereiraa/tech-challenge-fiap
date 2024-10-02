import { theme_color, theme_fonts} from './@theme/theme'

export default function Home() {
  return (
    <div style={{backgroundColor: theme_color.white, color: theme_color.success}}>
      <h1 style={theme_fonts.header_semibold}>
        Tech Challenge was born!!
      </h1>
    </div>  
  );
}
