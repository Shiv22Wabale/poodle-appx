import React, { useState, useContext, useEffect } from "react"
import {
  FormControl,
  TextField,
  makeStyles,
} from '@material-ui/core'
import {
  AutoComplete,
} from 'antd'
import {
  valid_html_tags,
} from 'app-x/builder/ui/util_parse'

const AutoCompleteHtmlTag = (props) => {

  const styles = makeStyles((theme) => ({
    formControl: {
      width: '100%',
      // margin: theme.spacing(1),
      // padding: theme.spacing(2, 0, 2, 2),
    },
  }))()

  const [ options,    setOptions    ] = useState([])

  useEffect(() => {
    setOptions(valid_html_tags().map(n => ({value: n})))
  }, [props.selectedKey])

  return (
    <FormControl className={styles.formControl}>
      <AutoComplete
        options={options}
        value={props.value}
        onChange={data => {
          props.onChange(data)
          setBaseSubmitTimer(new Date())
        }}
        onSearch={s => {
          const valid_names = valid_html_tags()
          const s_list = s.toUpperCase().split(' ').filter(s => !!s)
          const found_options = valid_names.filter(name => {
            const name_upper = name.toUpperCase()
            return s_list.reduce(
              (result, obj) => !!result && name_upper.includes(obj),
              true)
          }).map(n => ({value: n}))
          setOptions(found_options)
        }}
        >
        <TextField
          label={props.title}
          name={props.name}
          value={props.value}
          onChange={e => {
            props.onChange(e.target.value)
            setBaseSubmitTimer(new Date())
          }}
          error={!!props.errors?.name}
          helperText={props.errors?.name?.message}
        />
      </AutoComplete>
    </FormControl>
  )
}

export default AutoCompleteHtmlTag
