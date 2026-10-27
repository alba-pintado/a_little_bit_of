/* =========================================================
   BIOINFORMATICS TUTORIALS
   Fields: id, title, date ("YYYY-MM-DD"), level, summary,
           tags, body (Markdown — code blocks are highlighted),
           example (true = placeholder badge)
   Tip: write code blocks with three backticks and the language,
   e.g.  ```bash   ```r   ```python
   ========================================================= */
window.SITE = window.SITE || {};

SITE.tutorials = [
  {
    id: "qc-fastqc-multiqc",
    title: "Quality control of sequencing reads with FastQC and MultiQC",
    date: "2026-10-18",
    level: "Beginner",
    summary: "Check your raw FASTQ files before doing anything else, and read the report without panicking.",
    tags: ["NGS", "Command line", "Quality control"],
    example: true,
    body: `
      Before aligning or assembling anything, look at your raw reads. Two tools do
      most of the work: **FastQC** checks each file and **MultiQC** gathers every
      report into a single page.

      ## 1. Install the tools
      The easiest way is with conda (or mamba):

      \`\`\`bash
      conda create -n qc -c bioconda -c conda-forge fastqc multiqc
      conda activate qc
      \`\`\`

      ## 2. Run FastQC on every file

      \`\`\`bash
      mkdir -p qc
      fastqc -t 4 -o qc/ raw_data/*.fastq.gz
      \`\`\`

      ## 3. Summarise with MultiQC

      \`\`\`bash
      multiqc qc/ -o qc/
      \`\`\`

      Open \`qc/multiqc_report.html\` in your browser.

      ## What to look at first
      - **Per base sequence quality**: quality usually drops towards the 3' end. A drop
        below ~Q20 suggests trimming.
      - **Adapter content**: if it rises at the end of the reads, trim adapters
        (for example with \`fastp\` or \`cutadapt\`).
      - **Duplication levels**: high duplication is normal in RNA-seq of highly
        expressed genes, but suspicious in whole-genome sequencing.

      > A red cross in FastQC is a prompt to think, not a verdict. Many "failures"
      > are expected for certain library types.
    `
  },
  {
    id: "align-and-call-variants",
    title: "From reads to variants: BWA, SAMtools and BCFtools",
    date: "2026-10-05",
    level: "Intermediate",
    summary: "Align paired-end reads to a reference genome and call SNPs and indels in five commands.",
    tags: ["NGS", "Command line", "Variant calling"],
    example: true,
    body: `
      A minimal, reproducible pipeline for small genomes (bacteria, yeast) or for
      learning on a single human chromosome.

      ## Install

      \`\`\`bash
      conda create -n varcall -c bioconda -c conda-forge bwa samtools bcftools
      conda activate varcall
      \`\`\`

      ## 1. Index the reference

      \`\`\`bash
      bwa index reference.fa
      samtools faidx reference.fa
      \`\`\`

      ## 2. Align and sort

      \`\`\`bash
      bwa mem -t 4 reference.fa sample_R1.fastq.gz sample_R2.fastq.gz \\
        | samtools sort -@ 4 -o sample.sorted.bam
      samtools index sample.sorted.bam
      \`\`\`

      ## 3. Check the alignment

      \`\`\`bash
      samtools flagstat sample.sorted.bam
      \`\`\`

      ## 4. Call variants

      \`\`\`bash
      bcftools mpileup -f reference.fa sample.sorted.bam \\
        | bcftools call -mv -Oz -o sample.vcf.gz
      bcftools index sample.vcf.gz
      \`\`\`

      ## 5. Filter low-quality calls

      \`\`\`bash
      bcftools view -i 'QUAL>=30 && DP>=10' sample.vcf.gz -Oz -o sample.filtered.vcf.gz
      \`\`\`

      Next step: annotate the variants (for example with SnpEff or VEP).
    `
  }
];
