export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            There are some of my projects, just have a look into it by clicking
            on the image.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className={d.icon}>
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img
                          src={d.src_p}
                          alt="projectimage"
                          style={{ width: "300px", height: "200px" }}
                        />
                      </div>
                      <div className="flip-box-back">
                        <h3>{d.name}</h3>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="social">
                              <ul>
                                <li>
                                  <a
                                    href={d.desktop}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i className="fa fa-desktop"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={d.GitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i className="fa fa-github"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* demo and github icons */}
                      </div>
                    </div>
                  </div>
                  <div className="project-name">{d.name}</div>
                  <div className="display-flex-btn">
                    <span>
                      <a href={d.desktop} 
                        className='btn btn-project'
                        target="_blank"
                        rel="noopener noreferrer"
                      > Demo</a>
                    </span>
                    <span>
                      <a href={d.GitHub}
                        className='btn btn-project'
                        target="_blank"
                        rel="noopener noreferrer"
                      > GitHub</a>
                    </span>
                  </div>
                </div>
              ))
            : "Loading"}
        </div>
        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <div className={d.icon}>
                    <img src={d.src_p} alt="logo" />
                  </div>

                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  );
};
