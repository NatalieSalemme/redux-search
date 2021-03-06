import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import { Header, Image, Segment } from 'semantic-ui-react';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Menu />
        <div className="about-container">
          <Header as="h1">About Us</Header>
          <div>
            <Segment className="about-img-container">
              <Image
                src="https://images.unsplash.com/photo-1521710385092-ffb18195a459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
                size="large"
                floated="left"
              />
              <p>
                Welcome to News Search, your number one source for all things
                hollywood, food, trending, and politics. We're dedicated to
                giving you the very best of news, with a focus on dependability,
                customer service and uniqueness. Founded in 2018 by Natalie
                Salemme, News search has come a long way from its beginnings in
                a small apartment in San Diego. When Natalie Salemme first
                started out, her passion for creating a site to get all the news
                at once drove her to do intense research, quit her day job, and
                gave her the drive to turn hard work and inspiration into to a
                booming news company. We now serve customers all over the United
                States, South America and Canada, and are thrilled to be a part
                of the eco-friendly wing of the news industry. We hope you enjoy
                our site as much as we enjoy offering it to you. If you have any
                questions or comments, please don't hesitate to contact us.
                Sincerely, Natalie Salemme
              </p>

              <p>
                Eros in cursus turpis massa. Purus viverra accumsan in nisl nisi
                scelerisque eu ultrices. Neque gravida in fermentum et.
                Consectetur lorem donec massa sapien faucibus et molestie ac
                feugiat. Eget egestas purus viverra accumsan in nisl nisi
                scelerisque eu. Nulla malesuada pellentesque elit eget gravida
                cum sociis natoque. Id neque aliquam vestibulum morbi blandit
                cursus. Ac orci phasellus egestas tellus rutrum tellus
                pellentesque eu. Et netus et malesuada fames ac turpis egestas.
                Ut placerat orci nulla pellentesque dignissim enim sit. Sit amet
                luctus venenatis lectus magna fringilla urna porttitor. Rhoncus
                aenean vel elit scelerisque mauris. Placerat vestibulum lectus
                mauris ultrices eros in cursus turpis. Tempor commodo
                ullamcorper a lacus. Proin sagittis nisl rhoncus mattis rhoncus
                urna neque viverra. Vitae proin sagittis nisl rhoncus mattis
                rhoncus urna. Cursus vitae congue mauris rhoncus aenean vel elit
                scelerisque mauris.
              </p>

              <p>
                Nunc lobortis mattis aliquam faucibus purus in massa. Donec
                ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum
                posuere. Faucibus vitae aliquet nec ullamcorper sit amet risus
                nullam. Nulla facilisi morbi tempus iaculis urna id volutpat. Et
                netus et malesuada fames ac turpis egestas integer eget. Aliquet
                nec ullamcorper sit amet. Tempus imperdiet nulla malesuada
                pellentesque elit eget gravida cum. Sapien et ligula ullamcorper
                malesuada proin libero nunc. Quam id leo in vitae turpis.
              </p>

              <p>
                Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                Eget gravida cum sociis natoque. Elementum facilisis leo vel
                fringilla est ullamcorper. Mauris in aliquam sem fringilla ut
                morbi. Convallis aenean et tortor at. Accumsan tortor posuere ac
                ut. Ornare arcu dui vivamus arcu felis. Neque vitae tempus quam
                pellentesque. Pellentesque habitant morbi tristique senectus et
                netus et malesuada. Tortor vitae purus faucibus ornare
                suspendisse sed nisi lacus. Feugiat in ante metus dictum at. Ac
                auctor augue mauris augue neque gravida in fermentum. Iaculis eu
                non diam phasellus vestibulum. Dignissim suspendisse in est ante
                in. Vitae sapien pellentesque habitant morbi tristique senectus
                et netus. Tincidunt tortor aliquam nulla facilisi cras fermentum
                odio.
              </p>

              <p>
                Cursus vitae congue mauris rhoncus aenean vel. Viverra nam
                libero justo laoreet sit amet cursus sit amet. Id volutpat lacus
                laoreet non curabitur gravida. Donec enim diam vulputate ut
                pharetra sit. Egestas tellus rutrum tellus pellentesque eu.
                Quisque id diam vel quam elementum pulvinar etiam. Vulputate
                sapien nec sagittis aliquam malesuada. Sociis natoque penatibus
                et magnis dis parturient montes. Duis ut diam quam nulla
                porttitor massa id neque aliquam. Ultrices vitae auctor eu augue
                ut lectus arcu bibendum at. Dapibus ultrices in iaculis nunc.
                Lacus luctus accumsan tortor posuere ac. Sem integer vitae justo
                eget magna fermentum iaculis.
              </p>
            </Segment>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
