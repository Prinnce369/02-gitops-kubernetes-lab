{{- define "gitops-kubernetes-lab.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "gitops-kubernetes-lab.fullname" -}}
{{- printf "%s-%s" .Release.Name (include "gitops-kubernetes-lab.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}
