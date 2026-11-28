# The race game's spectator shouts: licences

The clips in this folder (`*.m4a`, `manifest.json`) are synthetic speech made on 2026-11-12 with **Kokoro-82M** (hexgrad) by
`scripts/tts/render_race_crowd.py`: short, generic cheers ("Go!", "Let's go!", "Push!", "Come on!", "Kick!", "Go, go, go!", "Finish strong!" and nine more) in
sixteen of the model's stock voices (men and women; the "teen" voices are the model's higher voices shifted up a few semitones). They are not recordings. The game
plays them quietly, low-passed and panned, from the bystanders drawn along a course and in the stands (`js/ui/race-crowd.js`); they are never played as a bed.

**No cloned voice.** Every voice here is a voice shipped in the Kokoro-82M repository. No reference recording, no voice clone and nothing of the founder's
voice (`assets/coach/`, Chatterbox) is used for these clips. No names and no brands are spoken.

| Part | What | Licence | Source |
|---|---|---|---|
| Model weights | Kokoro-82M v1.0 (82M parameters, StyleTTS 2 based) | Apache-2.0 | https://huggingface.co/hexgrad/Kokoro-82M |
| Voices | `am_adam`, `am_michael`, `am_eric`, `am_onyx`, `bm_george`, `am_puck`, `am_liam`, `am_echo`, `af_heart`, `af_bella`, `af_nicole`, `af_sarah`, `bf_emma`, `af_sky`, `af_nova`, `af_jessica` (the same repository as the weights) | Apache-2.0, as the repository | https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md |
| Inference code | `kokoro` 0.9.4; `misaki` 0.9.4 (English G2P), run at render time only | Apache-2.0 | https://github.com/hexgrad/kokoro, https://github.com/hexgrad/misaki |
| Speech check | OpenAI Whisper large-v3, local, render time only (`scripts/tts/check_race_crowd.py`) | MIT | https://huggingface.co/openai/whisper-large-v3 |
| Audio processing and encoding | ffmpeg (pitch by resampling, EQ, a faint echo, AAC), render time only | LGPL/GPL tool; its output is not covered by the tool's licence | |

Apache-2.0 allows commercial use, including in a shipped app, with no fee. We keep this note with the clips, as the licence's notice requirement asks, and list
the model in `THIRD_PARTY_NOTICES.md`. The claps and cowbells the game plays with them are synthesised in code (`js/ui/race-audio-dsp.js`): no samples, nothing to license.

**Training data (from the model card, as stated by its author).** Kokoro was trained "exclusively on permissive/non-copyrighted audio data": public domain audio,
audio under Apache, MIT and similar licences, and synthetic audio from closed TTS models of large providers (no synthetic audio from open TTS models and no voice
clones). Two Creative Commons Attribution sets were part of the v1.0 training data: Koniwa `tnc` (CC BY 3.0, under 1 h) and SIWIS (CC BY 4.0, under 11 h); we repeat
the author's credit:

- Koniwa `tnc`, https://github.com/koniwa/koniwa, CC BY 3.0.
- SIWIS French speech synthesis database, https://datashare.ed.ac.uk/handle/10283/2353, CC BY 4.0.

**What we cannot verify.** The model card is the author's word. The terms of the closed providers whose synthetic speech was part of training are between them
and the model's author, and are not visible to us; Apache-2.0 is the licence we are given and rely on (the residual risk of any open voice model trained on
synthetic speech, the same one `assets/coach/LICENSES.md` records).

**Not used, on purpose:** any model or voice with a non-commercial, research-only or "no use in apps" licence, and any voice clone.
