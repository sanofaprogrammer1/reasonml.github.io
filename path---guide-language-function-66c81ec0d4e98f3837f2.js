webpackJsonp([38],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-function.json":function(a,e){a.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}}]},file:{relativePath:"guide/language/function.md",childMarkdownRemark:{html:'<p><em>Cheat sheet for the full function syntax at the end</em></p>\n<p>Can you believe we haven\'t covered function until now?</p>\n<p>Functions are declared with an arrow and return the expression.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greet = (name) =&gt; <span class="hljs-string">"Hello "</span> ++ name;</code></pre>\n      </div>\n<p>This declares a function and assigns to it the name <code>greet</code>, which you can call like so:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>greet(<span class="hljs-string">"world!"</span>); <span class="hljs-comment">/* "Hello world!" */</span></code></pre>\n      </div>\n<p>Multi-arguments functions have arguments separated by comma:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = (x, y, z) =&gt; x + y + z;\nadd(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">/* 6 */</span></code></pre>\n      </div>\n<p>For longer functions, you\'d surround the body with a block:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetMore = (name) =&gt; {\n  <span class="hljs-keyword">let</span> part1 = <span class="hljs-string">"Hello"</span>;\n  part1 ++ <span class="hljs-string">" "</span> ++ name\n};</code></pre>\n      </div>\n<h3 id="no-argument"><a href="#no-argument" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Argument</h3>\n<p>A function always takes an argument; but sometimes, we\'d use it for e.g. side-effects, and don\'t have anything to pass to it. In other languages, we\'d conceptually pass "no argument". In Reason, every function takes an argument; here we\'d conventionally pass it the value <code>()</code>, called "unit".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* receive &amp; destructure the unit argument */</span>\n<span class="hljs-keyword">let</span> logSomething = () =&gt; {\n  print_endline(<span class="hljs-string">"hello"</span>);\n  print_endline(<span class="hljs-string">"world"</span>)\n};\n\n<span class="hljs-comment">/* call the function with the value of type unit */</span>\nlogSomething();</code></pre>\n      </div>\n<p><code>()</code> is a totally normal value, the single possible value in <code>unit</code>. Reason gave it a special syntax out of convenience.</p>\n<h3 id="labeled-arguments"><a href="#labeled-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Labeled Arguments</h3>\n<p>Multi-arguments functions, especially those whose arguments are of the same type, can be confusing to call.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates = (x, y) =&gt; {\n  <span class="hljs-comment">/* use x and y here */</span>\n};\n...\naddCoordinates(<span class="hljs-number">5</span>, <span class="hljs-number">6</span>); <span class="hljs-comment">/* which is x, which is y? */</span></code></pre>\n      </div>\n<p>In OCaml/Reason, you can attach labels to an argument:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates = (~x, ~y) =&gt; {\n  <span class="hljs-comment">/* use x and y here */</span>\n};\n...\naddCoordinates(~x=<span class="hljs-number">5</span>, ~y=<span class="hljs-number">6</span>);</code></pre>\n      </div>\n<p>Since we have currying (more on that below), we can provide the arguments in any order:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>addCoordinates(~y=<span class="hljs-number">6</span>, ~x=<span class="hljs-number">5</span>);</code></pre>\n      </div>\n<p>The <code>~x</code> part during declaration means the function accepts an argument labeled <code>x</code> and can refer to it in the function body by the same name. You can also refer to the arguments inside the function body by a different name for conciseness:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle = (~radius <span class="hljs-keyword">as</span> r, ~color <span class="hljs-keyword">as</span> <span class="hljs-built_in">c</span>) =&gt; {\n  setColor(<span class="hljs-built_in">c</span>);\n  startAt(r, r);\n  ...\n};\n\ndrawCircle(~radius=<span class="hljs-number">10</span>, ~color=<span class="hljs-string">"red"</span>);</code></pre>\n      </div>\n<p>Here\'s the syntax for typing the arguments:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle = (~radius <span class="hljs-keyword">as</span> r: int, ~color <span class="hljs-keyword">as</span> <span class="hljs-built_in">c</span>: string) =&gt; ...;</code></pre>\n      </div>\n<h4 id="currying"><a href="#currying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Currying</h4>\n<p>Reason functions can automatically be <strong>partially</strong> called:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = (x, y) =&gt; x + y;\n<span class="hljs-keyword">let</span> addFive = add(<span class="hljs-number">5</span>);\n<span class="hljs-keyword">let</span> eleven = addFive(<span class="hljs-number">6</span>);\n<span class="hljs-keyword">let</span> twelve = addFive(<span class="hljs-number">7</span>);</code></pre>\n      </div>\n<p>Actually, the above <code>add</code> is nothing but syntactic sugar for this:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = (x) =&gt; (y) =&gt; x + y;</code></pre>\n      </div>\n<p>OCaml optimizes this to <a href="/try/?reason=DYUwLgBAhgJjEF4IAoAeBKRA+FBPTCOqEA1BLgNwBQVA9AFQTAD2zA1tJGABYgTMBXMAAchAQmhwAYgEsAbnxkBnaBAD6SmQDsA5qDUQAZgK0BjMDOZaIpqMGAT6tKqEiwYshYkkxkAVnRqF3AITWIkd08QZABGQKA">avoid the unnecessary function allocation</a> (2 functions here, naively speaking) whenever it can! This way, we get</p>\n<ul>\n<li>Nice syntax</li>\n<li>Currying for free (every function takes a single argument, actually!)</li>\n<li>No performance cost</li>\n</ul>\n<h3 id="optional-labeled-arguments"><a href="#optional-labeled-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optional Labeled Arguments</h3>\n<p>Labeled function arguments can be made optional during declaration. You can then omit them when calling the function.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* radius can be omitted */</span>\n<span class="hljs-keyword">let</span> drawCircle = (~color, ~radius=?, ()) =&gt; {\n  setColor(color);\n  <span class="hljs-keyword">switch</span> radius {\n  | <span class="hljs-type">None</span> =&gt; startAt(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)\n  | <span class="hljs-type">Some</span>(r_) =&gt; startAt(r_, r_)\n  }\n};</code></pre>\n      </div>\n<p>When given in this syntax, <code>radius</code> is <strong>wrapped</strong> in the standard library\'s <code>option</code> type, defaulting to <code>None</code>. If provided, it\'ll be wrapped with a <code>Some</code>. So <code>radius</code>\'s type value is either <code>None</code> or <code>Some int</code> here.</p>\n<p><strong>Note</strong>: <code>None | Some(foo)</code> is a data structure type called variant, described <a href="/guide/language/variant">earlier</a>. This particular variant type is provided by the standard library. It\'s called <code>option</code>. Its definition: <code>type option(\'a) = None | Some(\'a)</code>.</p>\n<p><strong>Note</strong> the unit <code>()</code> at the end of <code>drawCircle</code>. Without it, since <code>radius</code> and <code>color</code> are both labeled, can be curried, and can be applied out-of-order, it\'s unclear what the following means:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> whatIsThis = drawCircle(~color);</code></pre>\n      </div>\n<p>Is <code>whatIsThis</code> a curried <code>drawCircle</code> function, waiting for the optional <code>radius</code> to be applied? Or did it finish applying? To address this confusion, append a positional (aka non-labeled) argument to <code>drawCircle</code> (conventionally <code>()</code>), and OCaml will, as a rule of thumb, presume the optional labeled argument is omitted when the positional argument is provided.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> curriedFunction = drawCircle(~color);\n<span class="hljs-keyword">let</span> actualResultWithoutProvidingRadius = drawCircle(~color, ());</code></pre>\n      </div>\n<h4 id="explicitly-passed-optional"><a href="#explicitly-passed-optional" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explicitly Passed Optional</h4>\n<p>Sometimes, you might want to forward a value to a function without knowing whether the value is <code>None</code> or <code>Some a</code>. Naively, you\'d do:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result =\n  <span class="hljs-keyword">switch</span> payloadRadius {\n  | <span class="hljs-type">None</span> =&gt; drawCircle(~color, ())\n  | <span class="hljs-type">Some</span>(r) =&gt; drawCircle(~color, ~radius=r, ())\n  };</code></pre>\n      </div>\n<p>This quickly gets tedious. We provide a shortcut:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result = drawCircle(~color, ~radius=?payloadRadius, ());</code></pre>\n      </div>\n<p>This means "I understand <code>radius</code> is optional, and that when I pass it a value it needs to be an <code>int</code>, but I don\'t know whether the value I\'m passing is <code>None</code> or <code>Some(val)</code>, so I\'ll pass you the whole <code>option</code> wrapper".</p>\n<h4 id="optional-with-default-value"><a href="#optional-with-default-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optional with Default Value</h4>\n<p>Optional labeled arguments can also be provided a default value. In this case, they aren\'t wrapped in an <code>option</code> type.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle = (~radius=<span class="hljs-number">1</span>, ~color, ()) =&gt; {\n  setColor(color);\n  startAt(radius, radius)\n};</code></pre>\n      </div>\n<h4 id="recursive-functions"><a href="#recursive-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Recursive Functions</h4>\n<p>By default, a value can\'t see a binding that points to it, but including the <code>rec</code> keyword in a <code>let</code> binding makes this possible. This allows functions to see and call themselves, giving us the power of recursion.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> neverTerminate = () =&gt; neverTerminate();</code></pre>\n      </div>\n<h4 id="mutually-recursive-functions"><a href="#mutually-recursive-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutually Recursive Functions</h4>\n<p>Mutually recursive functions start like a single recursive function using the\n<code>rec</code> keyword, and then are chained together with <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> callSecond = () =&gt; callFirst()\nand callFirst = () =&gt; callSecond();</code></pre>\n      </div>\n<p><strong>Note</strong> that there\'s no semicolon ending the first line and no <code>let</code> on the second line.</p>\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<p>Cheat sheet for the function syntaxes:</p>\n<h4 id="declaration"><a href="#declaration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Declaration</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* anonymous function. Listed for completeness only */</span>\n(x) =&gt; (y) =&gt; <span class="hljs-number">1</span>;\n<span class="hljs-comment">/* sugar for the above */</span>\n(x, y) =&gt; <span class="hljs-number">1</span>;\n<span class="hljs-comment">/* assign to a name */</span>\n<span class="hljs-keyword">let</span> add = (x, y) =&gt; <span class="hljs-number">1</span>;\n\n<span class="hljs-comment">/* labeled */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x, ~second <span class="hljs-keyword">as</span> y) =&gt; x + y;\n<span class="hljs-comment">/* with punning sugar */</span>\n<span class="hljs-keyword">let</span> add = (~first, ~second) =&gt; first + second;\n\n<span class="hljs-comment">/* labeled with default value */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x=<span class="hljs-number">1</span>, ~second <span class="hljs-keyword">as</span> y=<span class="hljs-number">2</span>) =&gt; x + y;\n<span class="hljs-comment">/* with punning */</span>\n<span class="hljs-keyword">let</span> add = (~first=<span class="hljs-number">1</span>, ~second=<span class="hljs-number">2</span>) =&gt; first + second;\n\n<span class="hljs-comment">/* optional */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x=?, ~second <span class="hljs-keyword">as</span> y=?) =&gt; <span class="hljs-keyword">switch</span> x {...};\n<span class="hljs-comment">/* with punning */</span>\n<span class="hljs-keyword">let</span> add = (~first=?, ~second=?) =&gt; <span class="hljs-keyword">switch</span> first {...};</code></pre>\n      </div>\n<h5 id="with-type-annotation"><a href="#with-type-annotation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Type Annotation</h5>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* anonymous function */</span>\n(x: int) =&gt; (y: int): int =&gt; <span class="hljs-number">1</span>;\n<span class="hljs-comment">/* sugar for the above */</span>\n(x: int, y: int): int =&gt; <span class="hljs-number">1</span>;\n<span class="hljs-comment">/* assign to a name */</span>\n<span class="hljs-keyword">let</span> add = (x: int, y: int): int =&gt; <span class="hljs-number">1</span>;\n\n<span class="hljs-comment">/* labeled */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x: int, ~second <span class="hljs-keyword">as</span> y: int) : int =&gt; x + y;\n<span class="hljs-comment">/* with punning sugar */</span>\n<span class="hljs-keyword">let</span> add = (~first: int, ~second: int) : int =&gt; first + second;\n\n<span class="hljs-comment">/* labeled with default value */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x: int=<span class="hljs-number">1</span>, ~second <span class="hljs-keyword">as</span> y: int=<span class="hljs-number">2</span>) : int =&gt; x + y;\n<span class="hljs-comment">/* with punning sugar */</span>\n<span class="hljs-keyword">let</span> add = (~first: int=<span class="hljs-number">1</span>, ~second: int=<span class="hljs-number">2</span>) : int =&gt; first + second;\n\n<span class="hljs-comment">/* optional */</span>\n<span class="hljs-keyword">let</span> add = (~first <span class="hljs-keyword">as</span> x: option(int)=?, ~second <span class="hljs-keyword">as</span> y: option(int)=?) : int =&gt; <span class="hljs-keyword">switch</span> x {...};\n<span class="hljs-comment">/* with punning sugar */</span>\n<span class="hljs-comment">/* note that the caller would pass an `int`, not `option int` */</span>\n<span class="hljs-comment">/* Inside the function, `first` and `second` are `option int`. */</span>\n<span class="hljs-keyword">let</span> add = (~first: option(int)=?, ~second: option(int)=?) : int =&gt; <span class="hljs-keyword">switch</span> first {...};</code></pre>\n      </div>\n<h4 id="application"><a href="#application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Application</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* anonymous application. Listed for completeness only */</span>\nadd(x)(y);\n<span class="hljs-comment">/* sugar for the above */</span>\nadd(x, y);\n\n<span class="hljs-comment">/* labeled */</span>\nadd(~first=<span class="hljs-number">1</span>, ~second=<span class="hljs-number">2</span>);\n<span class="hljs-comment">/* with punning sugar */</span>\nadd(~first, ~second);\n\n<span class="hljs-comment">/* application with default value. Same as normal application */</span>\nadd(~first=<span class="hljs-number">1</span>, ~second=<span class="hljs-number">2</span>);\n\n<span class="hljs-comment">/* explicit optional application */</span>\nadd(~first=?<span class="hljs-type">Some</span>(<span class="hljs-number">1</span>), ~second=?<span class="hljs-type">Some</span>(<span class="hljs-number">2</span>));\n<span class="hljs-comment">/* with punning */</span>\nadd(~first?, ~second?);</code></pre>\n      </div>\n<h5 id="with-type-annotation-1"><a href="#with-type-annotation-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Type Annotation</h5>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* anonymous application */</span>\nadd(x: int)(y: int);\n\n<span class="hljs-comment">/* labeled */</span>\nadd(~first=<span class="hljs-number">1</span>: int, ~second=<span class="hljs-number">2</span>: int);\n<span class="hljs-comment">/* with punning sugar */</span>\nadd(~first: int, ~second: int);\n\n<span class="hljs-comment">/* application with default value. Same as normal application */</span>\nadd(~first=<span class="hljs-number">1</span>: int, ~second=<span class="hljs-number">2</span>: int);\n\n<span class="hljs-comment">/* explicit optional application */</span>\nadd(~first=?<span class="hljs-type">Some</span>(<span class="hljs-number">1</span>): option(int), ~second=?<span class="hljs-type">Some</span>(<span class="hljs-number">2</span>): option(int));\n<span class="hljs-comment">/* with punning sugar */</span>\nadd(~first: option(int)?, ~second: option(int)?);</code></pre>\n      </div>\n<h4 id="standalone-type-signature"><a href="#standalone-type-signature" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standalone Type Signature</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* first arg type, second arg type, return type */</span>\n<span class="hljs-keyword">type</span> foo = int =&gt; int =&gt; int;\n<span class="hljs-comment">/* sugar for the above */</span>\n<span class="hljs-keyword">type</span> foo = (int, int) =&gt; int;\n\n<span class="hljs-comment">/* labeled */</span>\n<span class="hljs-keyword">type</span> foo = (~first: int, ~second: int) =&gt; int;\n\n<span class="hljs-comment">/* labeled with default value */</span>\n<span class="hljs-keyword">type</span> foo = (~first: int=?, ~second: int=?) =&gt; int;</code></pre>\n      </div>\n<h5 id="in-interface-files"><a href="#in-interface-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In Interface Files</h5>\n<p>To annotate a function from the implementation file (<code>.re</code>):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add: int =&gt; int =&gt; int;\n<span class="hljs-comment">/* sugar for the above */</span>\n<span class="hljs-keyword">let</span> add: (int, int) =&gt; int;</code></pre>\n      </div>\n<p>Same rules as the previous section, except replacing <code>type foo = bar</code> with <code>let add: bar</code>.</p>\n<p><strong>Don\'t</strong> confuse this with actually exporting a type in the interface file. <code>let add: bar</code> annotates an existing value <code>bar</code> from the implementation file. <code>type foo = bar</code> exports a type of the same shape from the implementation file.</p>',
frontmatter:{title:"Function"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/function.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-function-66c81ec0d4e98f3837f2.js.map