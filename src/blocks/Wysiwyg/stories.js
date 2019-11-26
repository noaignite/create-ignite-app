import React from 'react'
import { storiesOf } from '@storybook/react'
import Wysiwyg from './Wysiwyg'

const stories = storiesOf('Blocks/Wysiwyg', module)

export const Default = props => (
  <Wysiwyg {...props}>
    <h1>HTML Ipsum Presents</h1>

    <p>
      <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
      turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
      Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
      placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
      wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
      elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.{' '}
      <a href="#0">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
    </p>

    <h2>Header Level 2</h2>

    <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ol>

    <p>
      Curabitur eu lobortis nisi. Sed condimentum diam et sollicitudin commodo. Vestibulum tempus
      ligula ac massa aliquet sodales. Suspendisse vitae quam lobortis, laoreet sem ut, venenatis
      dolor. Sed mattis rutrum eros ac lobortis. Aenean quis lectus dapibus, convallis mi sed,
      rutrum dolor.
    </p>

    <blockquote>
      <p>”Morbi felis dui, tincidunt suscipit consectetur”</p>
    </blockquote>

    <figure>
      <img src="//source.unsplash.com/1600x900" alt="" />

      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</figcaption>
    </figure>

    <h3>Header Level 3</h3>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ul>

    <h4>Header Level 4</h4>

    <img src="//source.unsplash.com/648x861" alt="" />

    <h5>Header Level 5</h5>

    <h6>Header Level 6</h6>
  </Wysiwyg>
)

stories.add('Default', Default)

export default Wysiwyg
