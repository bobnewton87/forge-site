# The coach's voice clips: licences

The clips in this folder (`*.m4a`, `manifest.json`) are synthetic speech made on 2026-11-09 with **Chatterbox** (Resemble AI), cloning the founder's
own voice, by `scripts/tts/render_coach_chatterbox.py` from the script in `js/engine/coach-lines.js`. They are not recordings: the model speaks the
script in a voice made from a short reference recording of the owner.

**2026-11-12 (v6/setup-modes).** The coach's lines were rewritten in the owner's own register and 172 clips (every changed line, the 126 week variants, eleven new ones for the run-only questions and week) were rendered again with the same model, settings and reference recording, on the owner's own machine (RTX 4090), each checked by Whisper large-v3 (every word present, no clipped start or end). Nothing else changed; the reference recording stayed private and local.

**Consent.** The owner, the founder of Forge, approved cloning his own voice for his own app (2026-11-09: "definitely my voice"). It is his voice, used for his
product, with no one else's voice involved. The reference recording is private (mode 600, outside the repository), is never committed or sent to any
web service, and is not in the build; the model ran locally on the founder's own machine.

| Part | What | Licence | Source |
|---|---|---|---|
| Model weights | Chatterbox 0.5B (Llama backbone, trained on 0.5M hours of cleaned data, per the model card), `ResembleAI/chatterbox` | MIT (model card: `license: mit`) | https://huggingface.co/ResembleAI/chatterbox |
| Inference code | `chatterbox-tts` 0.1.7 (run at render time only) | MIT, Copyright (c) 2025 Resemble AI | https://github.com/resemble-ai/chatterbox |
| Watermarker | `resemble-perth` 1.0.1, PerTh (Perceptual Threshold) | MIT | https://github.com/resemble-ai/perth |
| Speech check | OpenAI Whisper `whisper-base.en`, local, render time only (words, clipping, pace) | MIT | https://huggingface.co/openai/whisper-base.en |
| Audio encoding | ffmpeg's native AAC encoder (render time only) | LGPL/GPL tool; its output is not covered by the tool's licence | |

MIT allows commercial use, including in a shipped app, with no fee and no obligation on the output. We keep this note with the clips, as the licence's
notice requirement asks, and list the model in `THIRD_PARTY_NOTICES.md`.

**The watermark.** Chatterbox adds an imperceptible PerTh neural watermark to everything it generates; the model card says it survives MP3
compression and common edits. It is part of the model's output, is inaudible, and is left in (it is how clips from this model can be recognised as
synthetic). Nothing in the clips tries to remove it.

**Not used, on purpose:** XTTS (Coqui Public Model Licence, non-commercial), and any model or voice with a non-commercial, research-only or
"no use in apps" licence. No voice other than the owner's own was cloned.

## The fallback and earlier voice: Kokoro-82M (am_michael)

The first coach clips (2026-11-09, replaced the same day) were made with **Kokoro-82M** and its **am_michael** voice by `scripts/tts/render_coach.py`.
That script stays in the repository: running it rewrites `assets/coach/` with the Kokoro voice, the fallback if the cloned voice is ever withdrawn.
Nothing in this folder is a Kokoro clip now.

| Part | What | Licence | Source |
|---|---|---|---|
| Model weights | Kokoro-82M v1.0 (82M parameters, StyleTTS 2 based) | Apache-2.0 | https://huggingface.co/hexgrad/Kokoro-82M |
| Voice | `am_michael` (shipped in the same repository as the weights) | Apache-2.0, as the repository | https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md |
| Inference code | `kokoro` 0.9.4; `misaki` 0.9.4 (English G2P) | Apache-2.0 | https://github.com/hexgrad/kokoro, https://github.com/hexgrad/misaki |

**Training data (from the model card, as stated by its author).** Kokoro was trained "exclusively on permissive/non-copyrighted audio data": public
domain audio, audio under Apache, MIT and similar licences, and synthetic audio from closed TTS models of large providers (no synthetic audio from
open TTS models and no voice clones). Two Creative Commons Attribution sets were part of the v1.0 training data: Koniwa `tnc` (CC BY 3.0, under 1 h)
and SIWIS (CC BY 4.0, under 11 h). The author credits them in the model card; we repeat the credit here:

- Koniwa `tnc`, https://github.com/koniwa/koniwa, CC BY 3.0.
- SIWIS French speech synthesis database, https://datashare.ed.ac.uk/handle/10283/2353, CC BY 4.0.

**What we cannot verify.** The model card is the author's word. The terms of the closed providers whose synthetic speech was part of training are
between them and the model's author, and are not visible to us. Apache-2.0 is the licence we are given and rely on; the owner should know this is
the residual risk of any open voice model trained on synthetic speech.
