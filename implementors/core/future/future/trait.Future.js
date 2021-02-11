(function() {var implementors = {};
implementors["async_io"] = [{"text":"impl Future for Timer","synthetic":false,"types":[]}];
implementors["async_task"] = [{"text":"impl&lt;T&gt; Future for Task&lt;T&gt;","synthetic":false,"types":[]}];
implementors["event_listener"] = [{"text":"impl Future for EventListener","synthetic":false,"types":[]}];
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; Future for Cancellation&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_lite"] = [{"text":"impl&lt;T&gt; Future for Pending&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, F&gt; Future for PollOnce&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Future&lt;Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, F&gt; Future for PollFn&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(&amp;mut Context&lt;'_&gt;) -&gt; Poll&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Ready&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Future for YieldNow","synthetic":false,"types":[]},{"text":"impl&lt;F1, F2&gt; Future for Zip&lt;F1, F2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Future,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Future,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T1, T2, E, F1, F2&gt; Future for TryZip&lt;F1, F2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Future&lt;Output = Result&lt;T1, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Future&lt;Output = Result&lt;T2, E&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, F1, F2&gt; Future for Or&lt;F1, F2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Future&lt;Output = T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Future&lt;Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, F1, F2&gt; Future for Race&lt;F1, F2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Future&lt;Output = T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Future&lt;Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Future + UnwindSafe&gt; Future for CatchUnwind&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Stream + Unpin + ?Sized&gt; Future for NextFuture&lt;'_, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, E, S:&nbsp;?Sized&gt; Future for TryNextFuture&lt;'_, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = Result&lt;T, E&gt;&gt; + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Stream + ?Sized&gt; Future for CountFuture&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S, C&gt; Future for CollectFuture&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Default + Extend&lt;S::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, E, S, C&gt; Future for TryCollectFuture&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = Result&lt;T, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Default + Extend&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, P, B&gt; Future for PartitionFuture&lt;S, P, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Sized,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(&amp;S::Item) -&gt; bool,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Default + Extend&lt;S::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, F, T&gt; Future for FoldFuture&lt;S, F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(T, S::Item) -&gt; T,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, E, S, F, B&gt; Future for TryFoldFuture&lt;'a, S, F, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = Result&lt;T, E&gt;&gt; + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(B, T) -&gt; Result&lt;B, E&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized&gt; Future for NthFuture&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Stream&gt; Future for LastFuture&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, P&gt; Future for FindFuture&lt;'a, S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(&amp;S::Item) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, B, F&gt; Future for FindMapFuture&lt;'a, S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(S::Item) -&gt; Option&lt;B&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, P&gt; Future for PositionFuture&lt;'a, S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(S::Item) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;?Sized, P&gt; Future for AllFuture&lt;'_, S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(S::Item) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;?Sized, P&gt; Future for AnyFuture&lt;'_, S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(S::Item) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, F&gt; Future for ForEachFuture&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(S::Item),&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, F, E&gt; Future for TryForEachFuture&lt;'a, S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(S::Item) -&gt; Result&lt;(), E&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, A, B, FromA, FromB&gt; Future for UnzipFuture&lt;S, FromA, FromB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = (A, B)&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;FromA: Default + Extend&lt;A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;FromB: Default + Extend&lt;B&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;?Sized&gt; Future for FillBuf&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsyncBufRead + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncBufRead + Unpin + ?Sized&gt; Future for ReadUntilFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncBufRead + Unpin + ?Sized&gt; Future for ReadLineFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead + Unpin + ?Sized&gt; Future for ReadFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead + Unpin + ?Sized&gt; Future for ReadVectoredFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead + Unpin + ?Sized&gt; Future for ReadToEndFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead + Unpin + ?Sized&gt; Future for ReadToStringFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead + Unpin + ?Sized&gt; Future for ReadExactFuture&lt;'_, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;AsyncSeek + Unpin + ?Sized&gt; Future for SeekFuture&lt;'_, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;AsyncWrite + Unpin + ?Sized&gt; Future for WriteFuture&lt;'_, W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;AsyncWrite + Unpin + ?Sized&gt; Future for WriteVectoredFuture&lt;'_, W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;AsyncWrite + Unpin + ?Sized&gt; Future for WriteAllFuture&lt;'_, W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;AsyncWrite + Unpin + ?Sized&gt; Future for FlushFuture&lt;'_, W&gt;","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;AsyncWrite + Unpin + ?Sized&gt; Future for CloseFuture&lt;'_, W&gt;","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl&lt;T&gt; Future for LocalFutureObj&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for FutureObj&lt;'_, T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()