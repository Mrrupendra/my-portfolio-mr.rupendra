export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://drive.google.com/drive/folders/1NZWUeWh2blEoiZSS2lOn3vXh9SSGjMAZ?usp=sharing'
                  className='btn btn-custom btn-lg page-scroll'
                  target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
