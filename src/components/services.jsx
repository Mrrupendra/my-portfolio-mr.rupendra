export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
           There are some of my projects, just have a look into it by clicking on the image. 
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  {/* <i className={d.icon}></i> */}

                  <a href={d.gitLink}
                     target="_blank" rel="noopener noreferrer"
                  >
                  <div className={d.icon}>
                    <img src={d.src_p} alt="logo" />
                  </div>
                  </a>

                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
