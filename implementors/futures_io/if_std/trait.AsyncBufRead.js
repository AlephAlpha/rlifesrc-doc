(function() {var implementors = {};
implementors["futures_lite"] = [{"text":"impl&lt;R:&nbsp;AsyncRead&gt; AsyncBufRead for BufReader&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsyncBufRead for Cursor&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;[u8]&gt; + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsyncBufRead for Empty","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncBufRead&gt; AsyncBufRead for Take&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R1:&nbsp;AsyncBufRead, R2:&nbsp;AsyncBufRead&gt; AsyncBufRead for Chain&lt;R1, R2&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()