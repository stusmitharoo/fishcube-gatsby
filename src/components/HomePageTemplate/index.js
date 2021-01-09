import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Conditions from '../Conditions'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  registerButton,
  whoForTitle,
  whoFor,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-small'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section not-mobile'>
          <div className='columns'>
            <div className='column is-10-desktop is-offset-1-desktop is-12-mobile'>
              <div className='content'>
                <div>
                  <div className='buttons has-addons is-centered'>
                    <a className='is-medium button is-primary' href='https://app.fishcube.co.uk/auth?link=fishcube'>
                      {registerButton}
                    </a>
                  </div>
                  <h3 className='has-text-weight-semibold is-size-2-desktop'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>{whoForTitle}</h2>
                <Conditions listItems={whoFor} />
                <a className='is-medium button is-primary has-margin-top-40' href='https://app.fishcube.co.uk/auth?link=fishcube'>
                  {registerButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  registerButton: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  whoFor: PropTypes.array,
  whyNot: PropTypes.array,

}

export default HomePageTemplate
