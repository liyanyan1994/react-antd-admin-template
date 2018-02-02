import React from 'react'
import PropTypes from 'prop-types'
import { setFilter } from '../../../../actions/actions'
import { connect } from 'react-redux'
import { Tag } from 'antd'

const StatusTag = ({ active, children, onClick }) => {
  return (
    <Tag
      className="filter selected"
      color={active? '#87d068':null}
      onClick={ev => {
        ev.preventDefault()
        onClick()
      }}
    >
      {children}
    </Tag>
  )
}

StatusTag.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusTag)
