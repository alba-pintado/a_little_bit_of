/* =========================================================
   COURSES: R, PYTHON, MACHINE LEARNING
   Each course has a list of lessons, in teaching order.
   A lesson with a "body" gets its own page.
   A lesson with only a title (and soon: true) shows as "coming soon".
   Lesson fields: id, title, date, summary, body (Markdown), soon
   ========================================================= */
window.SITE = window.SITE || {};

SITE.courses = [
  {
    key: "r",
    title: "R for biologists",
    description: "From your first data frame to publication-ready plots, always with biological data.",
    lessons: [
      {
        id: "r-01-data-frames",
        title: "Your first data frame: a tiny expression table",
        date: "2026-10-22",
        summary: "Create a data frame, add a log2 fold-change column, filter and sort it.",
        example: true,
        body: `
          In this first lesson we build a small table of gene expression values and
          ask a typical question: *which genes change after treatment?*

          ## Create the table

          \`\`\`r
          genes <- data.frame(
            gene    = c("TP53", "BRCA1", "MYC", "GAPDH"),
            control = c(12.1, 8.4, 15.2, 30.5),
            treated = c(5.1, 8.9, 34.0, 31.0)
          )
          genes
          \`\`\`

          ## Add a new column
          The log2 fold change makes increases and decreases symmetric:
          doubling is +1, halving is −1.

          \`\`\`r
          genes$log2FC <- log2(genes$treated / genes$control)
          \`\`\`

          ## Sort and filter

          \`\`\`r
          genes[order(genes$log2FC), ]          # sorted from most down to most up
          subset(genes, abs(log2FC) > 1)        # genes that change more than 2-fold
          \`\`\`

          You should get **TP53** (down) and **MYC** (up). GAPDH, a housekeeping
          gene, barely moves, which is exactly what we'd hope for a control.

          ## Plot it

          \`\`\`r
          library(ggplot2)
          ggplot(genes, aes(x = reorder(gene, log2FC), y = log2FC, fill = log2FC > 0)) +
            geom_col() +
            geom_hline(yintercept = c(-1, 1), linetype = "dashed") +
            labs(x = NULL, y = "log2 fold change") +
            theme_minimal() +
            theme(legend.position = "none")
          \`\`\`

          **Exercise:** add a fifth gene of your choice and check whether it passes the filter.
        `
      },
      { id: "r-02-tidyverse", title: "Reading real data with readr and dplyr", soon: true },
      { id: "r-03-ggplot", title: "ggplot2: the grammar of graphics", soon: true },
      { id: "r-04-deseq2", title: "Differential expression with DESeq2", soon: true }
    ]
  },
  {
    key: "python",
    title: "Python for bioinformatics",
    description: "Sequences, files and automation: the Python you actually need in the lab.",
    lessons: [
      {
        id: "py-01-fasta",
        title: "Reading a FASTA file and computing GC content",
        date: "2026-10-15",
        summary: "Write a FASTA parser from scratch, then do the same in two lines with Biopython.",
        example: true,
        body: `
          FASTA is the most common format for sequences. Each record has a header
          line starting with \`>\` followed by one or more lines of sequence.

          ## From scratch

          \`\`\`python
          def read_fasta(path):
              """Return a dict {sequence_name: sequence}."""
              seqs, name = {}, None
              with open(path) as fh:
                  for line in fh:
                      line = line.strip()
                      if not line:
                          continue
                      if line.startswith(">"):
                          name = line[1:].split()[0]
                          seqs[name] = []
                      else:
                          seqs[name].append(line.upper())
              return {k: "".join(v) for k, v in seqs.items()}


          def gc_content(seq):
              """Percentage of G and C bases."""
              return 100 * (seq.count("G") + seq.count("C")) / len(seq)


          for name, seq in read_fasta("sequences.fasta").items():
              print(f"{name}\\t{len(seq)} bp\\t{gc_content(seq):.1f}% GC")
          \`\`\`

          ## With Biopython

          \`\`\`python
          from Bio import SeqIO
          from Bio.SeqUtils import gc_fraction

          for record in SeqIO.parse("sequences.fasta", "fasta"):
              print(record.id, len(record.seq), f"{gc_fraction(record.seq):.1%}")
          \`\`\`

          Writing the parser yourself once teaches you how the format works.
          After that, use the library: it handles the edge cases for you.

          **Exercise:** modify \`read_fasta\` so it skips sequences shorter than 100 bp.
        `
      },
      { id: "py-02-pandas", title: "Tables with pandas", soon: true },
      { id: "py-03-plots", title: "Plotting with matplotlib and seaborn", soon: true },
      { id: "py-04-scripts", title: "Turning notebooks into command-line scripts", soon: true }
    ]
  },
  {
    key: "ml",
    title: "Machine learning for life sciences",
    description: "The core ideas of ML, explained with biological datasets and scikit-learn.",
    lessons: [
      {
        id: "ml-01-first-classifier",
        title: "Your first classifier, done properly",
        date: "2026-10-08",
        summary: "Train/test split, scaling inside a pipeline and cross-validation, on a tumour dataset.",
        example: true,
        body: `
          The most common mistake in ML for biology isn't choosing the wrong model,
          it's **evaluating it on data it has already seen**. This lesson sets up the
          habit of doing it right from day one.

          ## The data
          scikit-learn includes the Wisconsin breast cancer dataset: 569 tumours
          described by 30 measurements of their cell nuclei, labelled malignant or benign.

          \`\`\`python
          from sklearn.datasets import load_breast_cancer
          from sklearn.model_selection import train_test_split, cross_val_score
          from sklearn.pipeline import make_pipeline
          from sklearn.preprocessing import StandardScaler
          from sklearn.linear_model import LogisticRegression
          from sklearn.metrics import classification_report

          X, y = load_breast_cancer(return_X_y=True)
          \`\`\`

          ## 1. Keep a test set aside

          \`\`\`python
          X_train, X_test, y_train, y_test = train_test_split(
              X, y, test_size=0.2, stratify=y, random_state=42
          )
          \`\`\`

          \`stratify=y\` keeps the same proportion of malignant and benign
          tumours in both sets.

          ## 2. Put preprocessing inside a pipeline
          Scaling learned on the whole dataset would leak information from the test
          set. Inside a pipeline it is learned on the training data only.

          \`\`\`python
          model = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))
          \`\`\`

          ## 3. Cross-validate on the training set

          \`\`\`python
          scores = cross_val_score(model, X_train, y_train, cv=5)
          print(f"CV accuracy: {scores.mean():.3f} ± {scores.std():.3f}")
          \`\`\`

          ## 4. Only now, touch the test set — once

          \`\`\`python
          model.fit(X_train, y_train)
          print(classification_report(y_test, model.predict(X_test)))
          \`\`\`

          **Question to think about:** in a cancer screening setting, is a false
          negative or a false positive worse? Which metric in the report reflects that?
        `
      },
      { id: "ml-02-trees", title: "Decision trees and random forests", soon: true },
      { id: "ml-03-unsupervised", title: "PCA and clustering of expression data", soon: true },
      { id: "ml-04-pitfalls", title: "Pitfalls: leakage, batch effects and small n", soon: true }
    ]
  }
];
