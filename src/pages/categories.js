import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CustomTitle from '../components/display/custom-title'
import CategoryList from '../components/categories/category-list'

const useStyles = makeStyles(theme => ({
  main: {
    margin: 20,
    [theme.breakpoints.down('xs')]: {
    },
  }
}));


function Categories() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <CustomTitle>Categories</CustomTitle>
      <CategoryList />
    </div>)
}

export default Categories
