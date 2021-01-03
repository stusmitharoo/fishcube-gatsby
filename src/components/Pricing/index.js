import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (

  <div className='columns has-margin-top-40'>
    {data.map(price => (
      <div key={price.plan} className='column has-margin-10' style={{ border: '1px solid #eaecee' }}>
        <section className='section'>
          <h4 className='is-size-1 has-text-centered has-text-primary has-text-weight-semibold'>
            {price.plan}
          </h4>
          <h2 className='is-size-1 has-text-weight-bold has-text-centered'>
            {price.price === 'Free' ? '' : '£'}{price.price}
          </h2>
          <p className='has-text-weight-semibold'>{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className='is-size-5'>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
}

export default Pricing
