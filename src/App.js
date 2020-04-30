import React from 'react';
import './App.css';

const App = () => (
  <>  
    <Header title="Groy Design" fullWidth />
    <Wrapper>
      <CTA
        text="Read about the color Groy and its inspiration. Read more by clicking the button."
        btnText="Read more"
      />
      <Section>
        <BigArticle left
          imgSrc="https://source.unsplash.com/800x600/?earth"
          imgCaption="A random unsplash pic"
          title="It's time for something new..."
          btnText="Read more about groy"
          btnTo="#"
          subText="Groy is taking the world by storm. It's time to hop on board."
        />
      </Section>
      <Section>
        <BetweenFlex>
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?water"
            imgCaption="A random unsplash pic"
            title="Groy is the new Grey"
            subText="Black? No."
            btnText="Read more"
            btnTo="#"
          />
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?land"
            imgCaption="A random unsplash pic"
            title="Confusion no more"
            subText="Let's end this once and for all."
            btnText="Read more"
            btnTo="#"
          />
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?space"
            imgCaption="A random unsplash pic"
            title="Will it catch on? No, but it should."
            subText="Black? No."
            btnText="Read more"
            btnTo="#"
          />
        </BetweenFlex>
      </Section>
      <Section>
        <BigArticle
          imgSrc="https://source.unsplash.com/1600x900/?mountains"
          imgCaption="A random unsplash pic"
          title="It's time for something new..."
          btnText="Read more about groy"
          btnTo="#"
          subText="Groy is taking the world by storm. It's time to hop on board."
        />
      </Section>
      <Section>
        <BetweenFlex>
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?ocean"
            imgCaption="A random unsplash pic"
            title="Groy is the new Gray"
            subText="Black? No."
            btnText="Read more"
            btnTo="#"
          />
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?river"
            imgCaption="A random unsplash pic"
            title="Groy is the new Gray"
            subText="Black? No."
            btnText="Read more"
            btnTo="#"
          />
          <SmallArticle
            imgSrc="https://source.unsplash.com/500x400/?camping"
            imgCaption="A random unsplash pic"
            title="Groy is the new Gray"
            subText="Black? No."
            btnText="Read more"
            btnTo="#"
          />
        </BetweenFlex>
      </Section>
    </Wrapper>
    <Section>
      <Figure withCaption src="https://source.unsplash.com/1600x900/?nature" caption="Random picture from unsplash.com"></Figure>
    </Section>
    <CTA
      text="Consider subscribing to our newsletter."
      btnText="Subscribe for $5/mo"
    />
    <Wrapper>
      <Section>
          <BigArticle left
            imgSrc="https://source.unsplash.com/800x600/?beach"
            imgCaption="A random unsplash pic"
            title="It's time for something new..."
            btnText="Read more about groy"
            btnTo="#"
            subText="Groy is taking the world by storm. It's time to hop on board."
          />
      </Section>
    </Wrapper>
    <Footer title="&copy; GROY United 2020"></Footer>
  </>
);

const Heading = props => {
  const classTitle = 'ds-heading';
  const className = props.className ? `${classTitle} ${props.className}` : classTitle;
  const size = props.size ? props.size : 1;
  switch (size.toString()) {
    case '1':
      return <h1 className={`${className} ${classTitle}--big`}>{props.children}</h1>

    case '2':
      return <h2 className={`${className} ${classTitle}--med`}>{props.children}</h2>

    case '3':
      return <h3 className={`${className} ${classTitle}--small`}>{props.children}</h3>
      
    default:
      return <h1 className={`${className} ${classTitle}--big`}>{props.children}</h1>
  }
}

const Wrapper = props => (
  <div className="ds-wrap">{props.children}</div>
);

const Section = props => (
  <section className="ds-section">{props.children}</section>
);

const HeaderListItem = props => (
  <li className="ds-list-item">{props.children}</li>
);

const HeaderNav = props => (
  <nav className="ds-header__nav">
    <ul className="ds-header__nav-list">
      {props.children}
    </ul>
  </nav>
);

const HeaderLink = props => (
  <HeaderListItem>
    <a href={props.to} className={`ds-header__nav-link ${props.className || ''}`}>{props.children}</a>
  </HeaderListItem>
);

const Header = props => {
  const HeaderEl = () => (
    <header className="ds-header">
      <Heading size={2}>{props.title}</Heading>
      <HeaderNav>
        <HeaderLink to="#">About</HeaderLink>
        <HeaderLink to="#">Story</HeaderLink>
        <HeaderLink to="#">Team</HeaderLink>
        <HeaderLink to="#">Contact</HeaderLink>
      </HeaderNav>
    </header>
  );

  return props.fullWidth
    ? <HeaderEl />
    : (
        <Wrapper>
          <HeaderEl />
        </Wrapper>
      )
};

const Figure = props => {
  const classTitle = 'ds-fig';
  const className = props.className ? `${classTitle} ${props.className}` : classTitle;
  const cap = props.withCaption ? <figcaption className="ds-fig__caption">{props.caption}</figcaption> : null;
  const imgClass = props.small ? `${classTitle}__img--small` : null;
  return (
    <figure className={className}>
      <img className={`ds-fig__img ${imgClass}`} src={props.src} alt={props.caption}></img>
      {cap}
    </figure>
  )
}

const Button = props => {
  const classTitle = 'ds-button';
  const spaceClass = props.space ? `${classTitle}--spaced` : null;
  const className = props.className ? `${classTitle} ${props.className}` : `${classTitle} ${spaceClass}`;
  return (
    <a className={className} href={props.to}>{props.children}</a>
  );
}

const SecondaryButton = props => {
  const classTitle = 'ds-button-two';
  const spaceClass = props.space ? `${classTitle}--spaced` : null;
  const className = props.className ? `${classTitle} ${props.className}` : `${classTitle} ${spaceClass}`;
  return (
    <a className={className} href={props.to}>{props.children}</a>
  );
}

const Copy = props => (
  <p className="ds-copy">{props.children}</p>
);

const Text = props => (
  <p className={`ds-text ${props.className || ''}`}>{props.children}</p>
);

const CenterFlex = props => (
  <div className="ds-flex--center">{props.children}</div>
);

const BetweenFlex = props => (
  <div className={`ds-flex--between ${props.className || ''}`}>{props.children}</div>
)
;
const SubText = props => (
  <p className="ds-text ds-text--light">{props.children}</p>
);

const BigArticle = props => {
  const info = (
    <div className="ds-big-article__info">
        <Heading>{props.title}</Heading>
        <SubText>{props.subText}</SubText>
        <Button to={props.btnTo} className="ds-big-article__button">{props.btnText}</Button>
      </div>
  );

  const img = (
    <Figure src={props.imgSrc} caption={props.imgCaption}/>
  )

  const present = props.left
    ? <>{info}{img}</>
    : <>{img}{info}</>

  return(
    <BetweenFlex className="ds-big-article">
      {present}
    </BetweenFlex>
  );
};

const SmallArticle = props => (
  <div className="ds-small-article">
    <Figure className="ds-small-article__img" small src={props.imgSrc} caption={props.imgCaption}/>
    <Heading size={2}>{props.title}</Heading>
    <SubText>{props.subText}</SubText>
    <SecondaryButton className="ds-small-article__button" to={props.btnTo}>{props.btnText}</SecondaryButton>
  </div>
);

const CTA = props => (
  <Section around>
    <CenterFlex>
      <Text className="ds-cta__text">{props.text}</Text>
      <Button to="#" space>{props.btnText}</Button>
    </CenterFlex>
  </Section>
);

const Footer = props => (
  <footer className="ds-footer">
    <Section>
      <BetweenFlex>
        <Heading className="ds-footer__title" size={3}>{props.title}</Heading>
        <HeaderNav>
          <HeaderLink className="ds-footer__link" to="#">About</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Story</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Team</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Contact</HeaderLink>
        </HeaderNav>
      </BetweenFlex>
    </Section>
  </footer>
);


export default App;
