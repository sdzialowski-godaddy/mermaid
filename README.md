# Purpose of the script

Stript was create to improve navigation on the github page rendering mermaid containing markdown md file.

# Installation

Install Tampermonkey

- [chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related)
- [firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)

then install this script

https://greasyfork.org/en/scripts/441574-github-mermaid

... then reload this github page to see it in action against mermaid markdown

# Features

## \* Permalink on the same page

It is possible to prefix any label on the chart with "hash" and "number" (example "#2").

This part of label will be transformed into a red link with permalink which once clicked will scroll to header on the same page where that header also starts with the same "hash" and "number" (In case of above example it header will have to start from exactly with "#2")

Example:

~~~
```mermaid
  graph TD;
      A-->B[#10 b title <b>cl1ck me</b>];
      A-->C;
      B-->D;
      C-->D;
```
~~~

```mermaid
  graph TD;
      A-->B[#10 b title <b>cl1ck me</b>];
      A-->C;
      B-->D;
      C-->D;
```


## \* Coloring links

By default when [hyperlink](https://mermaid-js.github.io/mermaid/#/flowchart?id=interaction) is defined on the chart it's not really clear that it's a link. It lack styling typical for hyperlinks (blue color), it is only visible that it's a link once one hover over it, mouse cursor will change to state "pointer"

This script changes that to make links visible as regular blue links.

## \* Generating links to live editor

This script also generates special link on each chart which once clicked opens new tab in the browser with this chart in [live editor](https://mermaid-js.github.io/mermaid-live-editor)

# More materials about mermaid itself

- [Mermaid github homepage](https://github.com/mermaid-js/mermaid#readme)
- [Github announcment to provide native support for mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/)
- [Flowcharts Basic Syntax - doc page](https://mermaid-js.github.io/mermaid/#/flowchart)
- reverse engineered [url decoder](https://stopsopa.github.io/mermaid/)

## alternatives

- https://plantuml.com/link
- https://store.omnigroup.com/omnigraffle
- https://www.gliffy.com/
- https://news.ycombinator.com/item?id=18788244

# some more examples

~~~
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
~~~

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```


~~~
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->Z
      Z-->W
      Z-->X
      W-->X
      B-->D;
      C-->D;
```
~~~

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->Z
      Z-->W
      Z-->X
      W-->X
      B-->D;
      C-->D;
```


~~~
```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[fa:fa-car Result 2]
```
~~~

```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[fa:fa-car Result 2]
```


# advanced

[https://mermaid-js.github.io/](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNqtk02P2jAQhv_KKAjRSiQcqCrVFVQFVt22u6rU7Q04mHhCXBw7sifNrhL-e20SYJF6rE_j8TMffsduotQIjFg0HDZSS2LQwEiZ_QP-QTViMBK4q_ajMYwoxwKDJzMWHY3gCMfhcKP3lpc5_FptNPj1-c36ibil7VuI43nLrTU15MhFC4t1aU2KzsHCPG87fOGpuDUlalBSH1pYNkLywmgBAlPppNFQGqnp2PHLwIfEyug92j5otaZcuu0FSZLkighDhKInf3SMq3Zd2xeDpCLsDsMS0mJKofrDz6t3ebrTroU7X5DTljHmTIGp4s51FGpxbRTSnHtN9T6EwffgMdnJfgh26Midto_XmHlb-8xefNvCffNPDe79BeP25lpfLtLuvLQBeoXOX7NQS8r7gXy9ieoiVjCbzeat1zM99Mm_dSfDYdgjpKYoUFPnTFXgFpBbzGAT5UQlm0zquk60uV2Jj5tsol5_elHowzKpFBtkH7KxI2sOyAbT6bS341oKytm78vk6AN9DZk3BIBRyvlKBtuBSxL9dsvcXq3aJNGfnZDDJlKn9ECx9kmIWivphxDzW_smf-_ejW_neL3O89PT-43-qmzoXn1Kji8ZRD_kf14T8m-j0rzYR86bAjFeKgkpHj1al8E_hTkgyNmIZVw7HEa_IPL3oNGJkKzxDK8n9Oy566vgXzU0_jw)

~~~
```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%
graph TD
    A([Start]) -->|arrow head| B[process Box]
    B ---|open link| C{diamond <b>decision</b> point}
    C ----->|#1 longer link| D[this]
    C -...->|longer dotted link| O
    subgraph subgraph tilte
        direction LR
        C -->|b| E[#1 that]:::link
    end
    C -- chaining --> K -- of --> L -- links --> M
    C -->|whatever <a href='http://google.com'>link</a>| H{#2 decision point}
    H -.-|#2 dotted link| G[process box]
    H -.->|dotted link with head| I[process box]
    D ===>|thick link| J
    %% line comment
    click C href "https://www.google.com/search?q=flow+chart"
    click E href "https://www.google.com/search?q=mdn"
    click B href "http://www.nooooooooooooooo.com/"
    style B fill:#f9f,stroke:#333,stroke-width:4px
        %% from: https://mermaid-js.github.io/mermaid/#/flowchart?id=styling-a-node
    classDef someclass fill:#f96;
        %% from: https://mermaid-js.github.io/mermaid/#/flowchart?id=css-classes
```
~~~

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%
graph TD
    A([Start]) -->|arrow head| B[process Box]
    B ---|open link| C{diamond <b>decision</b> point}
    C ----->|#1 longer link| D[this]
    C -...->|longer dotted link| O
    subgraph subgraph tilte
        direction LR
        C -->|b| E[#1 that]:::link
    end
    C -- chaining --> K -- of --> L -- links --> M
    C -->|whatever <a href='http://google.com'>link</a>| H{#2 decision point}
    H -.-|#2 dotted link| G[process box]
    H -.->|dotted link with head| I[process box]
    D ===>|thick link| J
    %% line comment
    click C href "https://www.google.com/search?q=flow+chart"
    click E href "https://www.google.com/search?q=mdn"
    click B href "http://www.nooooooooooooooo.com/"
    style B fill:#f9f,stroke:#333,stroke-width:4px
        %% from: https://mermaid-js.github.io/mermaid/#/flowchart?id=styling-a-node
    classDef someclass fill:#f96;
        %% from: https://mermaid-js.github.io/mermaid/#/flowchart?id=css-classes
```


## Sequence Diagram

~~~
```mermaid
sequenceDiagram
    autonumber
    actor A as #35;1 Alice
    participant J as John
    participant B as Bob
    link Alice: Dashboard @ https://dashboard.contoso.com/alice
Note over A,B: Entity codes to escape characters #35;-#35;35#59; #38;-#35;38#59;

A->>J: Hello John, how are you?
loop Healthcheck
    J->>J: Fight against hypochondria
end
Note right of J: Rational thoughts!
J-->>A: Great!
A->>J: #9829;
J->>B: How about you?
B-->>J: Jolly good!
%% this is a comment
activate J
activate J
A->J: Solid line without arrow
A-->J: Dotted line without arrow
deactivate J
A->>J: Solid line with arrowhead
A-->>J: Dotted line with arrowhead
deactivate J
A-xJ: Solid line with a cross at the
A--xJ: Dotted line with a cross at the end.
Note over J,A: A typical interaction
A-)J: Solid line with an open arrow at the end (async)
A--)J: Dotted line with a open arrow at the end (async)

Note over A,B: Loops
  loop Every minute
      J-->B: Great!
  end

Note over A,B: Alt
  alt is sick
      B->>A: Not so good :(
  else is well
      B->>A: Feeling fresh like a daisy
  end

  opt Extra response
      B->>A: Thanks for asking
  end

rect rgb(191, 223, 255, 0.4)
Note over A,B: Parallel #38; Background Highlighting
    par John to Bob
        J->>B: Hello guys!
    and John to Alice
        J->>A: Hello guys!
    end
end
```
~~~

```mermaid
sequenceDiagram
    autonumber
    actor A as #35;1 Alice
    participant J as John
    participant B as Bob
    link Alice: Dashboard @ https://dashboard.contoso.com/alice
Note over A,B: Entity codes to escape characters #35;-#35;35#59; #38;-#35;38#59;

A->>J: Hello John, how are you?
loop Healthcheck
    J->>J: Fight against hypochondria
end
Note right of J: Rational thoughts!
J-->>A: Great!
A->>J: #9829;
J->>B: How about you?
B-->>J: Jolly good!
%% this is a comment
activate J
activate J
A->J: Solid line without arrow
A-->J: Dotted line without arrow
deactivate J
A->>J: Solid line with arrowhead
A-->>J: Dotted line with arrowhead
deactivate J
A-xJ: Solid line with a cross at the
A--xJ: Dotted line with a cross at the end.
Note over J,A: A typical interaction
A-)J: Solid line with an open arrow at the end (async)
A--)J: Dotted line with a open arrow at the end (async)

Note over A,B: Loops
  loop Every minute
      J-->B: Great!
  end

Note over A,B: Alt
  alt is sick
      B->>A: Not so good :(
  else is well
      B->>A: Feeling fresh like a daisy
  end

  opt Extra response
      B->>A: Thanks for asking
  end

rect rgb(191, 223, 255, 0.4)
Note over A,B: Parallel #38; Background Highlighting
    par John to Bob
        J->>B: Hello guys!
    and John to Alice
        J->>A: Hello guys!
    end
end
```


###### #10 header to scroll

Here is content under header to which user will be scrolled once he click process box with title "#10 b title" on above flow chart.

###### #1 longer link

https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNqtk02P2jAQhv_KKAjRSiQcqCrVFVQFVt22u6rU7Q04mHhCXBw7sifNrhL-e20SYJF6rE_j8TMffsduotQIjFg0HDZSS2LQwEiZ_QP-QTViMBK4q_ajMYwoxwKDJzMWHY3gCMfhcKP3lpc5_FptNPj1-c36ibil7VuI43nLrTU15MhFC4t1aU2KzsHCPG87fOGpuDUlalBSH1pYNkLywmgBAlPppNFQGqnp2PHLwIfEyug92j5otaZcuu0FSZLkighDhKInf3SMq3Zd2xeDpCLsDsMS0mJKofrDz6t3ebrTroU7X5DTljHmTIGp4s51FGpxbRTSnHtN9T6EwffgMdnJfgh26Midto_XmHlb-8xefNvCffNPDe79BeP25lpfLtLuvLQBeoXOX7NQS8r7gXy9ieoiVjCbzeat1zM99Mm_dSfDYdgjpKYoUFPnTFXgFpBbzGAT5UQlm0zquk60uV2Jj5tsol5_elHowzKpFBtkH7KxI2sOyAbT6bS341oKytm78vk6AN9DZk3BIBRyvlKBtuBSxL9dsvcXq3aJNGfnZDDJlKn9ECx9kmIWivphxDzW_smf-_ejW_neL3O89PT-43-qmzoXn1Kji8ZRD_kf14T8m-j0rzYR86bAjFeKgkpHj1al8E_hTkgyNmIZVw7HEa_IPL3oNGJkKzxDK8n9Oy566vgXzU0_jw

###### #2 dotted link

more about [dotted links](https://mermaid-js.github.io/mermaid/#/flowchart?id=dotted-link)
