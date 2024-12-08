import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid,Col,Image,Button, Row} from 'react-bootstrap';
import '../Styles/about.css'

export default class Inception extends Component{
    render(){
        return(
            <div>
                
                <div className="content-wrapper">    
                    <Image src="assets/img/movies/inception.jpg" />
                    <h2 className="heading">Inception</h2>
                    
                </div>
                <Grid>
            <Col xs={12} sm={8} smOffset={2}    >
            {/* <Image src="/assets/img/travel.jpg" className="about-pc" rounded /> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1FdB6LPSMkI?si=Q-4Yoa945nCfH53K&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>우리가 꿈을 꾸는 동안은 그것은 진짜같지만, 꿈에서 깨어나면 그것이 진짜가 아니었다는 것을 깨닫게 되는거지.</h3>

            <p>도미닉 "돔" 코브(레오나르도 디카프리오 분)와 아서(조지프 고든 레빗 분)는 기업 첩보 활동을 위해 일본인 기업가 사이토(와타나베 켄 분)를 대상으로 꿈 속에서의 정신적 추출(extraction)을 시도한다. 꿈 속에서도 고통은 느낄 수 있지만, 죽게 된다면 꿈에서 깨게 된다. 코브는 꿈과 현실을 구분하기 위해 "토템"을 가지고 다니는데, 이 팽이 모양의 토템은 꿈 속에서는 끝없이 회전하지만, 현실에서는 곧 멈추게 된다. 코브와 아서가 시도한 추출은 실패하는데, 이는 코브의 아내였던 맬(마리옹 코티야르 분)이 그의 꿈에 출몰하여 방해했기 때문이다.</p>

<p>사이토는 이 추출 과정이 타인의 꿈에 침투하여 생각을 심는 "인셉션"에 도전할 팀을 가려내기 위한 선발 과정이었다고 밝혔다. 사이토는 인셉션을 성공시킨다면 코브의 살인 혐의를 없애, 코브가 가족이 있는 미국으로 돌아갈 수 있게 하겠다고 약속했다. 인셉션의 대상은 사이토의 경쟁 기업의 총수인 모리스 피셔의 아들인 로버트 피셔(킬리언 머피 분)였다. 그리고 그 목적은 로버트 피셔로 하여금 아버지의 기업을 쪼개게 하는 것이었다. 코브는 인셉션을 위해 "포저Forger" 임스(톰 하디 분)와 "약제사Chemist" 유서프(딜리프 라오 분), "설계자Architect" 아리아드네(엘런 페이지 분)를 끌어모은다. 훈련 과정에서 아리아드네는 미완성된 꿈의 공간인 "림보"에 코브와 맬이 있었다는 것을 알게 된다. 맬은 림보를 현실로 인식하게 되었고, 코브가 그녀를 현실로 돌아오게 하자 정신적 혼란 상태에 빠졌다. 결국 맬은 자살하게 되었고, 코브는 그녀를 살해했다는 혐의를 받아 미국에서 떠나게 된 것이었다.
</p>

<p>인셉션을 통해 피셔에게 확실한 생각을 심어주기 위해, 코브의 팀은 3단 구조의 꿈속의 꿈을 설계한다. 하지만 꿈의 안정성을 유지하기 위해 사용하는 강력한 진정제는, 이들이 꿈 속에서 사망했을 때 림보에 빠지게 만들 위험성이 있었다. 이를 해결하기 위해 이들은 높은 곳에서 떨어지는 느낌을 주는 "킥"을 동기화하여 현실로 돌아온다는 계획을 세웠다. 이들은 각 단계의 꿈을 꾸는 사람이 그 단계에 남아 자의식으로부터 팀원들을 보호하고, 음악을 통해 킥의 시점을 조절하기로 했다.
</p>

<p>
모리스 피셔가 사망하자 팀원들은 로버트 피셔와 함께 사이토가 인수했던 항공사의 비행기에 탑승하여 그에게 진정제를 먹인다. 그들은 첫 번째 단계인 유서프의 꿈에서 피셔를 납치하지만, 피셔의 무장된 자의식에 의해 공격받게 된다. 이 과정에서 사이토가 심한 부상을 당하지만, 이들은 인셉션을 강행하기로 한다. 임스는 피셔의 대부인 피터 브라우닝(톰 베렌저 분)으로 위장하여, 피셔의 아버지의 두 번째 유언장이 금고에 있고, 그 안에는 그와 아버지의 관계를 개선할 만한 내용이 있다는 생각을 피셔에게 주입한다. 이후 팀원들은 밴에 탑승하여, 두 번째 단계인 아서의 꿈으로 들어간다. 이곳에서 팀원들은 피셔에게 첫 번째 단계에서의 납치는 브라우닝이 지휘한 것이며, 그의 생각을 결정하기 위해서는 브라우닝의 꿈 속으로 들어가야만 한다고 주장한다. 곧이어 그들은 세 번째 단계인 임스의 꿈으로 들어간다. 이 단계는 피셔가 설산 요새를 뚫고 들어가 주입될 생각을 찾게 하기 위한 것이었다.
</p>
<p>
하지만 코브가 막지 못하고 있던 사이에 피셔는 맬에게 살해당하고, 림보에 빠지게 된다. 사이토는 첫 단계에서 입었던 상처가 악화되어 사망함으로써 림보에 빠지게 된다. 첫 단계의 유서프는 밴을 다리 난간과 충돌시켜 첫 번째 킥을 시도했지만 실패하고, 밴은 강물로 떨어지기 시작한다. 이 때 두 번째 단계의 아서는 무중력 상태에 빠졌고, 다음 킥을 위해 엘리베이터의 추락을 통한 킥을 고안한다. 세 번째 단계의 아리아드네와 코브는 피셔를 따라 림보로 들어가 맬과 맞서게 된다. 코브는 림보에서 함께 지내자는 맬의 제안을 거부하며 그가 인셉션이 가능하다는 것을 알았던 이유를 밝힌다. 그는 맬을 림보에서 끌어내기 위해 맬에게 이 곳(림보)은 꿈이라는 생각을 주입했다. 하지만 그 생각은 맬의 머릿속에서 자라나 그녀가 빠져나온 현실 역시도 꿈이라고 생각하게 만들었고, 결국 그녀가 자살하는 원인이 되었다. 코브는 림보에 있는 맬이 실존했던 맬의 불완전한 투영물일 뿐이라고 말한다. 맬은 격분하여 코브를 칼로 찌르지만, 아리아드네의 총에 맞게 된다. 결국 코브는 사이토를 찾기 위해 림보에 남게 되고, 아리아드네와 피셔는 건물에서 떨어져 림보를 벗어난다.
</p>

<p>
세 번째 단계의 꿈으로 돌아온 피셔는 자신의 자의식의 방으로 들어가고, '나의 아버지는 내가 아버지의 길을 따르는 것보다 내가 스스로 선택하기를 바라신다'라는 생각을 성공적으로 주입받게 된다. 피셔와 남아있던 팀원들은 동기화된 킥을 통해 첫 번째 단계인 유서프의 꿈으로 돌아오는 데 성공한다. 한편 림보에 남았던 코브는 오랜 시간이 지난 뒤 사이토를 찾아 그들이 현실로 돌아가야 한다는 것을 말한다. 사이토는 코브를 회상하며 그가 아직 꿈 속에 있다는 사실을 깨닫고, 총을 쏴서 림보에서 빠져나온다. 집에 돌아온 코브는 꿈의 여부를 확인하기 위해 토템을 돌리지만 자신들의 아이들을 보고 토템을 놓은 채 아이들을 향해 간다. 하지만 마지막 장면에서 토템이 흔들리며 오픈 엔딩으로 끝난다.</p>
        
                  </Col>
            </Grid>
            
            <Grid fluid className="team" >
                
                <h1 className="text-center" >출연진</h1>
                <h5 className="text-center">주연 및 조연</h5>
                <Grid>
            <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/leonardoDicaprio.jpg" circle className="profile-pic"/>
                    <h3>Leonardo DiCaprio</h3>
                    {/* <a 
            href={` https://www.instagram.com/leonardodicaprio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
            target="_blank">
           Leonardo DiCaprio
          </a> */}

                    {/* <h5>American actor and film producer</h5> */}
                    <h4>코브 역</h4>
                    <p>Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/killian.jpg" circle className="profile-pic"/>
                    <h3>Cillian Murphy</h3>
                    <h4>로버트 피셔 역</h4>
                    <p>Cillian Murphy is an Irish actor. His works encompass both stage and screen, and his accolades include an Academy Award, a British Academy Film Award and a Golden Globe Award. He made his professional debut in Enda Walsh's 1996 play Disco Pigs, a role he later reprised in the 2001 screen adaptation.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="/assets/img/actors/elliotpage.jpg" circle className="profile-pic"/>
                    <h3>Elliot Page</h3>
                    <h4>애리어든 역</h4>
                    <p>Elliot Page is a Canadian actor and producer. His accolades include nominations for an Academy Award, three British Academy Film Awards, a Golden Globe Award, two Primetime Emmy Awards, and a Screen Actors Guild Award. He is also known for his outspoken activism.</p>
                    </Col>
                </Row>
                   </Grid>
               
                </Grid>



            </div>
        )
    }
}