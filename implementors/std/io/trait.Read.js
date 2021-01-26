(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;Read&gt; Read for DecoderReader&lt;'a, R&gt;","synthetic":false,"types":[]}];
implementors["futures_lite"] = [{"text":"impl&lt;T:&nbsp;AsyncRead + Unpin&gt; Read for BlockOn&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; Read for AllowStdIo&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Read,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Read for Receiver","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Read for &amp;'_ Receiver","synthetic":false,"types":[]}];
implementors["rand_core"] = [{"text":"impl Read for dyn RngCore","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()