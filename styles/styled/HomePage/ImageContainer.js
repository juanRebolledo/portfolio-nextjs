import styled from 'styled-components'

const ImageContainer = styled.div`
  height: 225px;
  width: 250px;

  img {
    border-radius: 10px;
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }

  @media(max-width: 576px) {
    height: 49%;
    width: 55%;
  }
`

export default ImageContainer
