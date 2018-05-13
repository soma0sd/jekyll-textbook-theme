---
---

kramdown의 마크다운 확장과 테마에서 지원하는 확장기능들입니다.

* 목차
{:toc}

# 수식 표현
TextBook은 [KaTeX](https://khan.github.io/KaTeX/)를 이용한 수식표현을 지원합니다.

```markdown
**인라인 수식:** $$ E = \gamma m c^2 $$

**수식 블록:**

$$\sum_{i=0}^{\infty} C_{i} g(i)$$
```

**인라인 수식:** $$ E = \gamma m c^2 $$

**수식 블록:**

$$\sum_{i=0}^{\infty} C_{i} g(i)$$

KaTex가 지원하는 수식 문법은 [KaTeX: 지원 함수](https://khan.github.io/KaTeX/function-support.html)를 참고하세요.

# 그림 크기 / 정렬
기본값은 화면 너비가 그림의 최대 가로 길이 입니다.
클래스를 사용하여 그림 크기를 변경할 수 있습니다.
`{: .sX}`를 그림 뒤에 붙이면 그림크기가 화면 너비를 기준으로 변경됩니다.
`X`는 1부터 12까지의 자연수이며 12는 100%를 의미합니다.


`{: .left|.right|.center }`를 사용하여 그림을 정렬할 수 있습니다. 그림을 정렬했을 때 본문의 글과 그림의 상호작용은 아래 예제를 참고하시기 바랍니다.

~~~markdown
![](../extension-01.jpg){: .s12}

![](../extension-01.jpg){: .s10 .right}
Lorem ipsum dolor sit amet,
eu his erant verterem,
percipit oporteat consequuntur et vel,
lucilius senserit maiestatis ei est.

![](../extension-01.jpg){: .s6 .left}
Te simul invidunt ullamcorper qui,
mea fierent consetetur cu,
graeci corrumpit adolescens eos ut.
![](../extension-01.jpg){: .s2 .center}
Qui vivendum pertinacia ne,
per eu sumo accusata maiestatis,
pri agam purto falli eu.
~~~

![](../extension-01.jpg){: .s12}

![](../extension-01.jpg){: .s10 .right}
Lorem ipsum dolor sit amet,
eu his erant verterem,
percipit oporteat consequuntur et vel,
lucilius senserit maiestatis ei est.

![](../extension-01.jpg){: .s6 .left}
Te simul invidunt ullamcorper qui,
mea fierent consetetur cu,
graeci corrumpit adolescens eos ut.

![](../extension-01.jpg){: .s2 .center}
Qui vivendum pertinacia ne,
per eu sumo accusata maiestatis,
pri agam purto falli eu.

# 목차
`{:toc}`를 사용하여 원하는 곳에 목차를 보여줄 수 있습니다.

```markdown
* 목차
{:toc}
```

목차 표시 명령은 문서당 한 번만 사용할 수 있습니다.
