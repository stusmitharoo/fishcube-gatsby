import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
  registerButton,
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
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='content'>
              <p className='is-size-5'>{pricing.description}</p>
              <Pricing data={pricing.plans} />
              <div className='buttons has-addons is-centered'>
                <a className='is-medium button is-primary' href='https://app.fishcube.co.uk/auth/register'>
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

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  registerButton: PropTypes.string,
  pricing: PropTypes.shape({
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
