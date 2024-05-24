import * as S from './style.js'

export function App() {
  const pixelToVH = (value) => {
    return $("#pixelToVH").html(`Resultado = <b>${(100 * value) / 1080}vh</b>`)
  }
  const pixelToVW = (value) => {
    return $("#pixelToVW").html(`Resultado = <b>${(100 * value) / 1920}vw</b>`)
  }
  const vhToPixel = (value) => {
    return $("#vhToPixel").html(`Resultado = <b>${(1080 * value) / 100}px</b>`)
  }
  const vwToPixel = (value) => {
    return $("#vwToPixel").html(`Resultado = <b>${((1920 * value) / 100)}px</b>`)
  }

  window.addEventListener('resize', updateValues)
  function updateValues() {
    const pixelToVHValue = $('#pixelToVH').val()
    const pixelToVWValue = $('#pixelToVW').val()
    const vhToPixelValue = $('#vhToPixel').val()
    const vwToPixelValue = $('#vwToPixel').val()
    pixelToVH(pixelToVHValue)
    pixelToVW(pixelToVWValue)
    vhToPixel(vhToPixelValue)
    vwToPixel(vwToPixelValue)
  }
  return (
    <>
      <S.GlobalStyle/>
      <S.Header>
        <nav>
          <h1>
            <a>Converter Pixel (px) para Viewport (VW e VH)</a>
          </h1>
        </nav>
      </S.Header>
      <S.Main>
        <div>
          <span className="text">Converter <b>PX</b> para <b>VH</b></span>
          <br/>
          <input className="pixelToVH" type="number" onKeyUp={(event) => pixelToVH(event.target.value)}/>
          <br/>
          <span className="result" id="pixelToVH">Resultado = <b>0vh</b></span>
        </div>
        <div>
          <span className="text">Converter <b>PX</b> para <b>VW</b></span>
          <br/>
          <input className="pixelToVW" type="number" onKeyUp={(event) => pixelToVW(event.target.value)}/>
          <br/>
          <span className="result" id="pixelToVW">Resultado = <b>0vw</b></span>
        </div>
        <div>
          <span className="text">Converter <b>VH</b> para <b>PX</b></span>
          <br/>
          <input className="vhToPixel" type="number" onKeyUp={(event) => vhToPixel(event.target.value)}/>
          <br/>
          <span className="result" id="vhToPixel">Resultado = <b>0px</b></span>
        </div>
        <div>
          <span className="text">Converter <b>VW</b> para <b>PX</b></span>
          <br/>
          <input className="vwToPixel" type="number" onKeyUp={(event) => vwToPixel(event.target.value)}/>
          <br/>
          <span className="result" id="vwToPixel">Resultado = <b>0px</b></span>
        </div>
      </S.Main>
    </>
  )}
